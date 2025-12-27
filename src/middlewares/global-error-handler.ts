import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/app-error";

export const globalErrorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: err.status,
			statusCode: err.statusCode,
			message: err.message,
		});
	}

	// Handle programming/unknown errors
	console.error("ERROR 💥", err);

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		status: "error",
		statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
		message: "Something went wrong!",
	});
};
