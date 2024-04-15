/*
  Warnings:

  - Added the required column `points` to the `Regras` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Regras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Regras" ADD COLUMN     "points" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
