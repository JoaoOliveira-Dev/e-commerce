/*
  Warnings:

  - You are about to drop the column `productId` on the `newdrop` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `newdrop` DROP FOREIGN KEY `NewDrop_productId_fkey`;

-- AlterTable
ALTER TABLE `newdrop` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `dropId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_dropId_fkey` FOREIGN KEY (`dropId`) REFERENCES `NewDrop`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
