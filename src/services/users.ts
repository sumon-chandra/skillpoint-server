import { Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

export const createUser = async (req: Request, res: Response) => {
	const userPayload: Prisma.UserCreateInput = req.body;
	const user = await prisma.user.create({
		data: userPayload,
	});
	res.json(user);
};
