-- CreateTable
CREATE TABLE `Pokemon` (
    `id` INTEGER NOT NULL,
    `capture_rate` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
