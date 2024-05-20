/*
  Warnings:

  - You are about to drop the column `created_by` on the `classrooms` table. All the data in the column will be lost.
  - Added the required column `name` to the `classrooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professor_id` to the `classrooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `classrooms` DROP FOREIGN KEY `classrooms_created_by_fkey`;

-- AlterTable
ALTER TABLE `classrooms` DROP COLUMN `created_by`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `professor_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `admins_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classrooms` ADD CONSTRAINT `classrooms_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `professors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
