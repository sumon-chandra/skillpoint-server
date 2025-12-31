import { User } from "../../../generated/prisma/client";
import httpStatus from "http-status-codes";
import bcrypt from "bcryptjs";
import { AppError } from "../../utils/app-error";
import { prisma } from "../../lib/prisma";
import { auth } from "../../lib/auth";

const signUp = async (user: Partial<User>) => {
	const { name, email, password, role } = user;

	if (!name || !email || !password || !role) {
		throw new AppError(httpStatus.NOT_FOUND, "Name, Email, Password & Role is required!");
	}

	const existingUser = await prisma.user.findUnique({
		where: { email },
	});

	if (existingUser) {
		throw new AppError(httpStatus.FORBIDDEN, "The account is already exist. Try with different email address.");
	}

	const hashPass = await bcrypt.hash(password, 10);

	// const newStudent = await prisma.user.create({
	// 	data: {
	// 		name,
	// 		email,
	// 		password: hashPass,
	// 		role,
	// 	},
	// });

	const newStudent = await auth.api.signUpEmail({
		body: {
			name,
			email,
			password: hashPass,
		},
	});
	return newStudent;
};

export const authServices = { signUp };
