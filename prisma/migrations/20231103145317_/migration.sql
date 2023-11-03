/*
  Warnings:

  - You are about to drop the column `nameCat` on the `category` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Category_nameCat_key` ON `category`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `nameCat`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
