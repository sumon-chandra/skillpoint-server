import httpStatus from "http-status-codes";
import bcrypt from "bcryptjs";
import { Student } from "../../../generated/prisma/client";
import { AppError } from "../../utils/app-error";
import { prisma } from "../../lib/prisma";

const createStudent = async (student: Partial<Student>) => {
	const { name, email, password, role } = student;

	if (!name || !email || !password || !role) {
		throw new AppError(httpStatus.NOT_FOUND, "Name, Email, Password & Role is required!");
	}

	const existingStudent = await prisma.student.findUnique({
		where: { email },
	});

	if (existingStudent) {
		throw new AppError(httpStatus.FORBIDDEN, "The account is already exist. Try with different email address.");
	}

	const hashPass = await bcrypt.hash(password, 10);

	const newStudent = await prisma.student.create({
		data: {
			name,
			email,
			password: hashPass,
			role,
		},
	});

	return newStudent;
};

export const studentServices = { createStudent };
