import { catchAsync } from "../../utility/catch-async";
import { sendResponse } from "../../utility/send-response";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { userServices } from "../users/users.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
	const user = await userServices.createUser();

	sendResponse(res, {
		success: true,
		statusCode: httpStatus.CREATED,
		message: "User Created Successfully!",
		data: user,
	});
});

export const usersController = {
	createUser,
};
