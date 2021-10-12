/*
  Warnings:

  - You are about to drop the `jogoongenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarioonjogo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `jogoongenero` DROP FOREIGN KEY `JogoOnGenero_generoId_fkey`;

-- DropForeignKey
ALTER TABLE `jogoongenero` DROP FOREIGN KEY `JogoOnGenero_jogoId_fkey`;

-- DropForeignKey
ALTER TABLE `perfil` DROP FOREIGN KEY `Perfil_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `usuarioonjogo` DROP FOREIGN KEY `UsuarioOnJogo_jogoId_fkey`;

-- DropForeignKey
ALTER TABLE `usuarioonjogo` DROP FOREIGN KEY `UsuarioOnJogo_usuarioId_fkey`;

-- DropTable
DROP TABLE `jogoongenero`;

-- DropTable
DROP TABLE `usuarioonjogo`;

-- CreateTable
CREATE TABLE `_JogoToPerfil` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_JogoToPerfil_AB_unique`(`A`, `B`),
    INDEX `_JogoToPerfil_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GeneroToJogo` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GeneroToJogo_AB_unique`(`A`, `B`),
    INDEX `_GeneroToJogo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Perfil` ADD CONSTRAINT `Perfil_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JogoToPerfil` ADD FOREIGN KEY (`A`) REFERENCES `Jogo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JogoToPerfil` ADD FOREIGN KEY (`B`) REFERENCES `Perfil`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToJogo` ADD FOREIGN KEY (`A`) REFERENCES `Genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToJogo` ADD FOREIGN KEY (`B`) REFERENCES `Jogo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
