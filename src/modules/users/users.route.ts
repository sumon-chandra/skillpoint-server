import { Router } from "express";
import { studentControllers } from "./users.controller";

export const usersRoute = Router();

usersRoute.get("/");
usersRoute.post("/create", studentControllers.createUser);
