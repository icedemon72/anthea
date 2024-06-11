/*
  Warnings:

  - You are about to drop the column `original` on the `files` table. All the data in the column will be lost.
  - Added the required column `destination` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimetype` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalname` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `files` DROP COLUMN `original`,
    ADD COLUMN `destination` VARCHAR(191) NOT NULL,
    ADD COLUMN `filename` VARCHAR(191) NOT NULL,
    ADD COLUMN `mimetype` VARCHAR(191) NOT NULL,
    ADD COLUMN `originalname` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `posts` ALTER COLUMN `updated_at` DROP DEFAULT;
