/*
  Warnings:

  - You are about to drop the `Regras` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Regras";

-- CreateTable
CREATE TABLE "Rules" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Rules_pkey" PRIMARY KEY ("id")
);
