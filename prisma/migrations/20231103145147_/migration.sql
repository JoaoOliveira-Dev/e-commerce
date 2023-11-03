/*
  Warnings:

  - You are about to drop the column `name` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameCat]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameCat` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `name`,
    ADD COLUMN `nameCat` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_nameCat_key` ON `Category`(`nameCat`);
