import { Router } from "express";
import { studentControllers } from "./students.controller";

export const studentsRouter = Router();

studentsRouter.get("/");
studentsRouter.post("/create", studentControllers.createStudent);
