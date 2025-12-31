import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catch-async";
import { userServices } from "./users.service";
import { sendResponse } from "../../utils/send-response";

const createUser = catchAsync(async (req: Request, res: Response) => {
	const user = await userServices.createUser(req.body);

	sendResponse(res, {
		success: true,
		statusCode: httpStatus.CREATED,
		message: "Register Successful!",
		data: user,
	});
});

export const studentControllers = { createUser };
