/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_studentId_fkey";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "Student";

-- DropEnum
DROP TYPE "UserRole";
