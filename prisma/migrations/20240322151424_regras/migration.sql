-- CreateTable
CREATE TABLE "Regras" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Regras_pkey" PRIMARY KEY ("id")
);
