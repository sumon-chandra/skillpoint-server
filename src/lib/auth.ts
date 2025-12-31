import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { envVars } from "../configs/env";
import { UserRole } from "../../generated/prisma/enums";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: envVars.auth.google.GOOGLE_CLIENT_ID,
			clientSecret: envVars.auth.google.GOOGLE_CLIENT_SECRET,
		},
	},
	user: {
		additionalFields: {
			role: {
				type: "string",
				required: true,
				defaultValue: UserRole.USER,
			},
		},
	},
});
