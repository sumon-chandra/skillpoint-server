import express, { Request, Response } from "express";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { envVars } from "./configs/env";
import { router } from "./routes";
import { notFoundHandler } from "./middlewares/not-found-handler";
import { globalErrorHandler } from "./middlewares/global-error-handler";
import { auth } from "./lib/auth";

const app = express();

// Middleware
app.use(
	expressSession({
		secret: envVars.EXPRESS_SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(
	cors({
		origin: "http://your-frontend-domain.com", // Replace with your frontend's origin
		methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
		credentials: true, // Allow credentials (cookies, authorization headers, etc.)
	})
);
app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", router);

// Routes
app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Hello from Skill Point API!" });
});

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
