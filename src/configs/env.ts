import dotEnv from "dotenv";
dotEnv.config();

interface EnvTypes {
	NODE_ENV: "development" | "production";
	PORT: string;
	EXPRESS_SESSION_SECRET: string;
	auth: {
		BETTER_AUTH_URL: string;
		BETTER_AUTH_SECRET: string;
		google: {
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
		};
	};
}

const loadEnv = (): EnvTypes => {
	const envVarsArr = [
		"NODE_ENV",
		"PORT",
		"EXPRESS_SESSION_SECRET",
		"BETTER_AUTH_SECRET",
		"BETTER_AUTH_URL",
		"GOOGLE_CLIENT_SECRET",
		"GOOGLE_CLIENT_ID",
	];

	envVarsArr.forEach((env) => {
		if (!process.env[env]) {
			throw new Error(`Environment Variable "${env}" is not found!!`);
		}
	});

	return {
		NODE_ENV: process.env.NODE_ENV as "development" | "production",
		PORT: process.env.PORT as string,
		EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET as string,
		auth: {
			BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
			BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
			google: {
				GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
				GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
			},
		},
	};
};

export const envVars = loadEnv();
