-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` INTEGER NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Perfil_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `capa` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `nota` INTEGER NOT NULL,
    `link_yt` VARCHAR(191) NOT NULL,
    `link_gp` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Jogo_nome_key`(`nome`),
    UNIQUE INDEX `Jogo_capa_key`(`capa`),
    UNIQUE INDEX `Jogo_descricao_key`(`descricao`),
    UNIQUE INDEX `Jogo_link_yt_key`(`link_yt`),
    UNIQUE INDEX `Jogo_link_gp_key`(`link_gp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genero_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JogoOnGenero` (
    `jogoId` INTEGER NOT NULL,
    `generoId` INTEGER NOT NULL,

    PRIMARY KEY (`jogoId`, `generoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioOnJogo` (
    `usuarioId` INTEGER NOT NULL,
    `jogoId` INTEGER NOT NULL,

    PRIMARY KEY (`usuarioId`, `jogoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Perfil` ADD CONSTRAINT `Perfil_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JogoOnGenero` ADD CONSTRAINT `JogoOnGenero_jogoId_fkey` FOREIGN KEY (`jogoId`) REFERENCES `Jogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JogoOnGenero` ADD CONSTRAINT `JogoOnGenero_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioOnJogo` ADD CONSTRAINT `UsuarioOnJogo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioOnJogo` ADD CONSTRAINT `UsuarioOnJogo_jogoId_fkey` FOREIGN KEY (`jogoId`) REFERENCES `Jogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
