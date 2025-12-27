import { Router } from "express";
import { studentsRouter } from "../modules/students/students.route";

export const router = Router();

const moduleRouters = [
	{
		path: "/students",
		route: studentsRouter,
	},
];

moduleRouters.forEach((route) => {
	router.use(route.path, route.route);
});
