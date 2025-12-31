import httpStatus from "http-status-codes";
import bcrypt from "bcryptjs";
import { AppError } from "../../utils/app-error";
import { prisma } from "../../lib/prisma";
import { User } from "../../../generated/prisma/client";

const createUser = async (student: Partial<User>) => {
	const { name, email, password } = student;

	if (!name || !email || !password) {
		throw new AppError(httpStatus.NOT_FOUND, "Name, Email & Password is required!");
	}

	const existingUser = await prisma.user.findUnique({
		where: { email },
	});

	if (existingUser) {
		throw new AppError(httpStatus.FORBIDDEN, "The account is already exist. Try with different email address.");
	}

	// Hash the password before storing
	const hashPass = await bcrypt.hash(password, 10);

	// Create user directly with Prisma, excluding password from response
	const newStudent = await prisma.user.create({
		data: {
			name,
			email,
			password: hashPass,
		},
		select: {
			id: true,
			name: true,
			email: true,
			emailVerified: true,
			image: true,
			role: true,
			createdAt: true,
			updatedAt: true,
		},
	});

	return newStudent;
};

export const userServices = { createUser };
