/*
  Warnings:

  - Added the required column `semester` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subjects` ADD COLUMN `semester` INTEGER NOT NULL;
