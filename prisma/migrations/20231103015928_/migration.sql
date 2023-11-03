/*
  Warnings:

  - You are about to drop the column `sizeId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `size` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_sizeId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `sizeId`,
    ADD COLUMN `size` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `size`;
