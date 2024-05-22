/*
  Warnings:

  - You are about to drop the column `professor_id` on the `classrooms` table. All the data in the column will be lost.
  - Added the required column `code` to the `classrooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `classrooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `classrooms` DROP FOREIGN KEY `classrooms_professor_id_fkey`;

-- AlterTable
ALTER TABLE `classrooms` DROP COLUMN `professor_id`,
    ADD COLUMN `code` VARCHAR(6) NOT NULL,
    ADD COLUMN `created_by` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_ClassroomToProfessor` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ClassroomToProfessor_AB_unique`(`A`, `B`),
    INDEX `_ClassroomToProfessor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `classrooms` ADD CONSTRAINT `classrooms_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `professors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToProfessor` ADD CONSTRAINT `_ClassroomToProfessor_A_fkey` FOREIGN KEY (`A`) REFERENCES `classrooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToProfessor` ADD CONSTRAINT `_ClassroomToProfessor_B_fkey` FOREIGN KEY (`B`) REFERENCES `professors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
