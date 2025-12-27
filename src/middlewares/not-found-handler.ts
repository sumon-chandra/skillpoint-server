import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/app-error";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
	const err = new AppError(StatusCodes.NOT_FOUND, `Can't find ${req.originalUrl} on this server!`);
	next(err);
};
