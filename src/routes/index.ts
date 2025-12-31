import { Router } from "express";
import { usersRoute } from "../modules/users/users.route";
import { authRoute } from "../modules/auth/auth.route";

export const router = Router();

const moduleRouters = [
	{
		path: "/users",
		route: usersRoute,
	},
	{
		path: "/auth",
		route: authRoute,
	},
];

moduleRouters.forEach((route) => {
	router.use(route.path, route.route);
});
