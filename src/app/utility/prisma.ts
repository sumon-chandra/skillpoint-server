import * as Prisma from "@prisma/client";

// Instantiate Prisma Client to be used across the application
const _Prisma = Prisma as any;
const PrismaClient = _Prisma.PrismaClient ?? _Prisma.default ?? _Prisma;
const prisma = new PrismaClient();

export default prisma;
