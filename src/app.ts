import express, { Request, Response } from "express";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import { envVars } from "./configs/env";
import { router } from "./routes";
import { notFoundHandler } from "./middlewares/not-found-handler";
import { globalErrorHandler } from "./middlewares/global-error-handler";

const app = express();

// Middleware
app.use(
	expressSession({
		secret: envVars.EXPRESS_SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(cors());
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
