/*
  Warnings:

  - You are about to drop the column `Image` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "Image",
DROP COLUMN "name",
DROP COLUMN "price";
