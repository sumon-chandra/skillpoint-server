import { Router } from "express";
import { authControllers } from "./auth.controller";

export const authRoute = Router();

authRoute.post("/signup", authControllers.signUp);
