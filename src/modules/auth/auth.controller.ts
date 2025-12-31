import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import { authServices } from "./auth.service";

const signUp = catchAsync(async (req: Request, res: Response) => {
	const signUpData = await authServices.signUp(req.body);

	sendResponse(res, {
		success: true,
		statusCode: httpStatus.CREATED,
		message: "Signup Successful!",
		data: signUpData,
	});
});

export const authControllers = { signUp };
