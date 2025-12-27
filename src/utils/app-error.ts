export class AppError extends Error {
	public statusCode: number;
	public isOperational: boolean;
	public status: string;

	constructor(statusCode: number = 500, message: string) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}
