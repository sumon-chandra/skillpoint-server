import { Server } from "node:http";
import app from "./app";
import { envVars } from "./configs/env";

let server: Server;

const connectServer = () => {
	try {
		server = app.listen(envVars.PORT, () => {
			console.log(`Server is running on http://localhost:${envVars.PORT}`);
		});
	} catch (error) {}
};

connectServer();

process.on("unhandledRejection", () => {
	console.log("Unhandled Rejection founded!! Server shut down.");
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	}

	process.exit(1);
});

process.on("uncaughtException", () => {
	console.log("Uncaught Exception founded!! Server shut down.");
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	}

	process.exit(1);
});

process.on("SIGTERM", () => {
	console.log("SIGTERM founded");
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	}

	process.exit(1);
});
