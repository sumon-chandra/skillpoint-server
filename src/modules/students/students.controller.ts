import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catch-async";
import { studentServices } from "./students.service";
import { sendResponse } from "../../utils/send-response";

const createStudent = catchAsync(async (req: Request, res: Response) => {
	const student = await studentServices.createStudent(req.body);

	sendResponse(res, {
		success: true,
		statusCode: httpStatus.CREATED,
		message: "Register Successful!",
		data: student,
	});
});

export const studentControllers = { createStudent };
