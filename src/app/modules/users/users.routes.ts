import { Router } from "express";

export const userRoutes = Router();

userRoutes.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "User route is working!",
	});
});
