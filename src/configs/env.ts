import dotEnv from "dotenv";
dotEnv.config();

interface EnvTypes {
	NODE_ENV: "development" | "production";
	PORT: string;
	EXPRESS_SESSION_SECRET: string;
}

const loadEnv = (): EnvTypes => {
	const envVarsArr = ["NODE_ENV", "PORT", "EXPRESS_SESSION_SECRET"];

	envVarsArr.forEach((env) => {
		if (!process.env[env]) {
			throw new Error(`Environment Variable "${env}" is not found!!`);
		}
	});

	return {
		NODE_ENV: process.env.NODE_ENV as "development" | "production",
		PORT: process.env.PORT as string,
		EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET as string,
	};
};

export const envVars = loadEnv();
