-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "milage" INTEGER NOT NULL,
    "fuel" INTEGER NOT NULL
);
