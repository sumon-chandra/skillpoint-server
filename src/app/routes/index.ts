import express from "express";
import { userRoutes } from "../modules/users/users.routes";

const mainRouter = express.Router();

// This array will hold all the routes from your different modules
const moduleRoutes = [
	{
		path: "/users",
		route: userRoutes,
	},
];

// This loop automatically registers all the module routes
moduleRoutes.forEach((route) => mainRouter.use(route.path, route.route));

export default mainRouter;
