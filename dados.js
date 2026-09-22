/* =========================================================
   CELULARRANK-OFFICIAL
   dados.js
   Catálogo de celulares, PCs e notebooks
========================================================= */

"use strict";

/* =========================================================
   📱 CELULARES
========================================================= */

const celulares = [

    /* ================= SAMSUNG ================= */

    {
        id: "samsung-a15-5g",
        nome: "Galaxy A15 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 1350,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 6100+",
        desempenho: 82,
        jogos: 78,
        qualidade: 84
    },

    {
        id: "samsung-a25-5g",
        nome: "Galaxy A25 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 1916,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1280",
        desempenho: 86,
        jogos: 82,
        qualidade: 87
    },

    {
        id: "samsung-a35-5g",
        nome: "Galaxy A35 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 1899,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1380",
        desempenho: 89,
        jogos: 86,
        qualidade: 91
    },

    {
        id: "samsung-a55-5g",
        nome: "Galaxy A55 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2399,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1480",
        desempenho: 92,
        jogos: 89,
        qualidade: 94
    },

    {
        id: "samsung-s23",
        nome: "Galaxy S23",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2700,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Snapdragon 8 Gen 2",
        desempenho: 95,
        jogos: 96,
        qualidade: 96
    },

    {
        id: "samsung-s24",
        nome: "Galaxy S24",
        marca: "Samsung",
        categoria: "Celular",
        preco: 3800,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 2400",
        desempenho: 96,
        jogos: 95,
        qualidade: 97
    },

    {
        id: "samsung-s24-ultra",
        nome: "Galaxy S24 Ultra",
        marca: "Samsung",
        categoria: "Celular",
        preco: 6000,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 99,
        jogos: 99,
        qualidade: 99
    },

    /* ================= APPLE ================= */

    {
        id: "apple-iphone-13",
        nome: "iPhone 13",
        marca: "Apple",
        categoria: "Celular",
        preco: 2790,
        ram: "4 GB",
        armazenamento: "128 GB",
        processador: "A15 Bionic",
        desempenho: 94,
        jogos: 95,
        qualidade: 95
    },

    {
        id: "apple-iphone-14",
        nome: "iPhone 14",
        marca: "Apple",
        categoria: "Celular",
        preco: 3200,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "A15 Bionic",
        desempenho: 95,
        jogos: 96,
        qualidade: 96
    },

    {
        id: "apple-iphone-15",
        nome: "iPhone 15",
        marca: "Apple",
        categoria: "Celular",
        preco: 3900,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "A16 Bionic",
        desempenho: 97,
        jogos: 97,
        qualidade: 97
    },

    {
        id: "apple-iphone-15-pro",
        nome: "iPhone 15 Pro",
        marca: "Apple",
        categoria: "Celular",
        preco: 5000,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "A17 Pro",
        desempenho: 99,
        jogos: 99,
        qualidade: 99
    },

    {
        id: "apple-iphone-16",
        nome: "iPhone 16",
        marca: "Apple",
        categoria: "Celular",
        preco: 4600,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "A18",
        desempenho: 99,
        jogos: 98,
        qualidade: 99
    },

    /* ================= XIAOMI ================= */

    {
        id: "xiaomi-redmi-note-13",
        nome: "Redmi Note 13",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 4000,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 685",
        desempenho: 82,
        jogos: 78,
        qualidade: 84
    },

    {
        id: "xiaomi-redmi-note-13-pro",
        nome: "Redmi Note 13 Pro",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1650,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7s Gen 2",
        desempenho: 90,
        jogos: 87,
        qualidade: 91
    },

    {
        id: "xiaomi-redmi-note-13-pro-plus",
        nome: "Redmi Note 13 Pro+",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1650,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Dimensity 7200 Ultra",
        desempenho: 94,
        jogos: 92,
        qualidade: 94
    },

    {
        id: "xiaomi-14",
        nome: "Xiaomi 14",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 4000,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 99,
        jogos: 98,
        qualidade: 98
    },

    /* ================= MOTOROLA ================= */

    {
        id: "motorola-g54",
        nome: "Moto G54 5G",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7020",
        desempenho: 83,
        jogos: 79,
        qualidade: 84
    },

    {
        id: "motorola-g84",
        nome: "Moto G84 5G",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1400,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 695",
        desempenho: 84,
        jogos: 80,
        qualidade: 87
    },

    {
        id: "motorola-edge-40",
        nome: "Motorola Edge 40",
        marca: "Motorola",
        categoria: "Celular",
        preco: 2000,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 8020",
        desempenho: 91,
        jogos: 88,
        qualidade: 92
    },

    {
        id: "motorola-edge-50-pro",
        nome: "Motorola Edge 50 Pro",
        marca: "Motorola",
        categoria: "Celular",
        preco: 2700,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7 Gen 3",
        desempenho: 92,
        jogos: 89,
        qualidade: 95
    },

    /* ================= REALME ================= */

    {
        id: "realme-c67",
        nome: "Realme C67",
        marca: "Realme",
        categoria: "Celular",
        preco: 1200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 685",
        desempenho: 82,
        jogos: 78,
        qualidade: 83
    },

    {
        id: "realme-12-pro",
        nome: "Realme 12 Pro",
        marca: "Realme",
        categoria: "Celular",
        preco: 2300,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 6 Gen 1",
        desempenho: 87,
        jogos: 83,
        qualidade: 90
    },

    {
        id: "realme-gt-6",
        nome: "Realme GT 6",
        marca: "Realme",
        categoria: "Celular",
        preco: 3000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8s Gen 3",
        desempenho: 97,
        jogos: 97,
        qualidade: 96
    },

    /* ================= ASUS ================= */

    {
        id: "asus-zenfone-10",
        nome: "Zenfone 10",
        marca: "ASUS",
        categoria: "Celular",
        preco: 3000,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Snapdragon 8 Gen 2",
        desempenho: 96,
        jogos: 97,
        qualidade: 94
    },

    {
        id: "asus-rog-phone-8",
        nome: "ROG Phone 8",
        marca: "ASUS",
        categoria: "Celular Gamer",
        preco: 5500,
        ram: "16 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 100,
        jogos: 100,
        qualidade: 98
    },

    /* ================= POCO ================= */

    {
        id: "poco-x6",
        nome: "POCO X6",
        marca: "POCO",
        categoria: "Celular",
        preco: 2199,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7s Gen 2",
        desempenho: 90,
        jogos: 88,
        qualidade: 88
    },

    {
        id: "poco-x6-pro",
        nome: "POCO X6 Pro",
        marca: "POCO",
        categoria: "Celular",
        preco: 2231,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 8300 Ultra",
        desempenho: 97,
        jogos: 98,
        qualidade: 91
    },

    {
        id: "poco-f6",
        nome: "POCO F6",
        marca: "POCO",
        categoria: "Celular",
        preco: 2199,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8s Gen 3",
        desempenho: 98,
        jogos: 99,
        qualidade: 93
    },

    /* ================= GOOGLE ================= */

    {
        id: "google-pixel-8",
        nome: "Pixel 8",
        marca: "Google",
        categoria: "Celular",
        preco: 3200,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Google Tensor G3",
        desempenho: 91,
        jogos: 86,
        qualidade: 96
    },

    {
        id: "google-pixel-8-pro",
        nome: "Pixel 8 Pro",
        marca: "Google",
        categoria: "Celular",
        preco: 3200,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Google Tensor G3",
        desempenho: 93,
        jogos: 89,
        qualidade: 98
    },

    /* ================= ONEPLUS ================= */

    {
        id: "oneplus-12",
        nome: "OnePlus 12",
        marca: "OnePlus",
        categoria: "Celular",
        preco: 4000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 99,
        jogos: 99,
        qualidade: 97
    },

    /* ================= HONOR ================= */

    {
        id: "honor-90",
        nome: "Honor 90",
        marca: "Honor",
        categoria: "Celular",
        preco: 2200,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 7 Gen 1",
        desempenho: 88,
        jogos: 84,
        qualidade: 91
    },

    /* ================= OPPO ================= */

    {
        id: "oppo-reno-11",
        nome: "OPPO Reno 11",
        marca: "OPPO",
        categoria: "Celular",
        preco: 2000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7050",
        desempenho: 86,
        jogos: 82,
        qualidade: 91
    },

    /* ================= NOTHING ================= */

    {
        id: "nothing-phone-2",
        nome: "Nothing Phone (2)",
        marca: "Nothing",
        categoria: "Celular",
        preco: 3000,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8+ Gen 1",
        desempenho: 93,
        jogos: 91,
        qualidade: 94
    }
];


/* =========================================================
   💻 PCS E NOTEBOOKS
========================================================= */

const pcs = [

    {
        id: "lenovo-ideapad-3",
        nome: "IdeaPad 3",
        marca: "Lenovo",
        categoria: "Notebook",
        preco: 3000,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Ryzen 5",
        video: "Integrado",
        desempenho: 78,
        jogos: 65,
        qualidade: 84
    },

    {
        id: "lenovo-loq",
        nome: "LOQ",
        marca: "Lenovo",
        categoria: "Notebook Gamer",
        preco: 6500,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "NVIDIA GeForce RTX",
        desempenho: 94,
        jogos: 94,
        qualidade: 93
    },

    {
        id: "asus-vivobook",
        nome: "Vivobook",
        marca: "ASUS",
        categoria: "Notebook",
        preco: 3700,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Integrado",
        desempenho: 82,
        jogos: 68,
        qualidade: 87
    },

    {
        id: "asus-tuf-gaming",
        nome: "TUF Gaming",
        marca: "ASUS",
        categoria: "Notebook Gamer",
        preco: 8700,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Ryzen 7",
        video: "NVIDIA GeForce RTX",
        desempenho: 96,
        jogos: 97,
        qualidade: 94
    },

    {
        id: "acer-aspire-5",
        nome: "Aspire 5",
        marca: "Acer",
        categoria: "Notebook",
        preco: 4000,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Integrado",
        desempenho: 82,
        jogos: 68,
        qualidade: 86
    },

    {
        id: "acer-nitro-v",
        nome: "Nitro V",
        marca: "Acer",
        categoria: "Notebook Gamer",
        preco: 7000,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "NVIDIA GeForce RTX",
        desempenho: 94,
        jogos: 95,
        qualidade: 92
    },

    {
        id: "dell-inspiron",
        nome: "Inspiron",
        marca: "Dell",
        categoria: "Notebook",
        preco: 4000,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Integrado",
        desempenho: 81,
        jogos: 65,
        qualidade: 89
    },

    {
        id: "hp-250",
        nome: "HP 250",
        marca: "HP",
        categoria: "Notebook",
        preco: 3500,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Integrado",
        desempenho: 81,
        jogos: 64,
        qualidade: 86
    },

    {
        id: "pc-ryzen-5-5600g",
        nome: "PC Gamer Ryzen 5 5600G",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 2500,
        ram: "16 GB",
        armazenamento: "480 GB SSD",
        processador: "Ryzen 5 5600G",
        video: "Radeon Vega Integrado",
        desempenho: 85,
        jogos: 78,
        qualidade: 86
    },

    {
        id: "pc-ryzen-5-5600",
        nome: "PC Gamer Ryzen 5 5600",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 3500,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Ryzen 5 5600",
        video: "Placa de vídeo dedicada",
        desempenho: 91,
        jogos: 90,
        qualidade: 90
    },

    {
        id: "pc-ryzen-7-5700x",
        nome: "PC Gamer Ryzen 7 5700X",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 5000,
        ram: "32 GB",
        armazenamento: "1 TB SSD",
        processador: "Ryzen 7 5700X",
        video: "Placa de vídeo dedicada",
        desempenho: 95,
        jogos: 94,
        qualidade: 94
    },

    {
        id: "pc-core-i3",
        nome: "PC Core i3",
        marca: "Intel",
        categoria: "PC",
        preco: 2000,
        ram: "8 GB",
        armazenamento: "240 GB SSD",
        processador: "Core i3",
        video: "Integrado",
        desempenho: 70,
        jogos: 55,
        qualidade: 78
    },

    {
        id: "pc-core-i5",
        nome: "PC Gamer Core i5",
        marca: "Intel",
        categoria: "PC Gamer",
        preco: 3500,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "Placa de vídeo dedicada",
        desempenho: 92,
        jogos: 90,
        qualidade: 91
    },

    {
        id: "pc-core-i7",
        nome: "PC Gamer Core i7",
        marca: "Intel",
        categoria: "PC Gamer",
        preco: 5000,
        ram: "32 GB",
        armazenamento: "1 TB SSD",
        processador: "Core i7",
        video: "Placa de vídeo dedicada",
        desempenho: 97,
        jogos: 96,
        qualidade: 96
    },

    {
        id: "msi-katana",
        nome: "MSI Katana",
        marca: "MSI",
        categoria: "Notebook Gamer",
        preco: 7000,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i7",
        video: "NVIDIA GeForce RTX",
        desempenho: 96,
        jogos: 97,
        qualidade: 94
    },

    {
        id: "gigabyte-g5",
        nome: "Gigabyte G5",
        marca: "Gigabyte",
        categoria: "Notebook Gamer",
        preco: 6500,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "NVIDIA GeForce RTX",
        desempenho: 93,
        jogos: 94,
        qualidade: 91
    }
];


/* =========================================================
   📱 ESPECIFICAÇÕES DOS CELULARES
========================================================= */

const especificacoesCelulares = {

    "samsung-a15-5g": {
        tela: '6.5" Super AMOLED 90 Hz',
        bateria: 5000,
        camera: '50 MP + 5 MP + 2 MP / frontal 13 MP',
        carregamento: '25W'
    },

    "samsung-a25-5g": {
        tela: '6.5" Super AMOLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 8 MP + 2 MP / frontal 13 MP',
        carregamento: '25W'
    },

    "samsung-a35-5g": {
        tela: '6.6" Super AMOLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 8 MP + 5 MP / frontal 13 MP',
        carregamento: '25W'
    },

    "samsung-a55-5g": {
        tela: '6.6" Super AMOLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 12 MP + 5 MP / frontal 32 MP',
        carregamento: '25W'
    },

    "samsung-s23": {
        tela: '6.1" Dynamic AMOLED 2X 120 Hz',
        bateria: 3900,
        camera: '50 MP + 10 MP tele + 12 MP ultrawide / frontal 12 MP',
        carregamento: '25W'
    },

    "samsung-s24": {
        tela: '6.2" Dynamic AMOLED 2X 120 Hz',
        bateria: 4000,
        camera: '50 MP + 10 MP tele + 12 MP ultrawide / frontal 12 MP',
        carregamento: '25W'
    },

    "samsung-s24-ultra": {
        tela: '6.8" Dynamic AMOLED 2X QHD+ 120 Hz',
        bateria: 5000,
        camera: '200 MP + 50 MP + 10 MP + 12 MP / frontal 12 MP',
        carregamento: '45W'
    },

    "apple-iphone-13": {
        tela: '6.1" Super Retina XDR OLED 60 Hz',
        bateria: 3227,
        camera: '12 MP + 12 MP / frontal 12 MP',
        carregamento: '20W'
    },

    "apple-iphone-14": {
        tela: '6.1" OLED 60 Hz',
        bateria: 3279,
        camera: '12 MP + 12 MP / frontal 12 MP',
        carregamento: '20W'
    },

    "apple-iphone-15": {
        tela: '6.1" Super Retina XDR OLED 60 Hz',
        bateria: 3349,
        camera: '48 MP + 12 MP / frontal 12 MP',
        carregamento: '20W'
    },

    "apple-iphone-15-pro": {
        tela: '6.1" OLED ProMotion 120 Hz',
        bateria: 3274,
        camera: '48 MP + 12 MP ultrawide + 12 MP tele 3x / frontal 12 MP',
        carregamento: '20W'
    },

    "apple-iphone-16": {
        tela: '6.1" OLED 60 Hz',
        bateria: 3561,
        camera: '48 MP + 12 MP / frontal 12 MP',
        carregamento: '20W'
    },

    "xiaomi-redmi-note-13": {
        tela: '6.67" AMOLED 120 Hz',
        bateria: 5000,
        camera: '108 MP + 8 MP + 2 MP / frontal 16 MP',
        carregamento: '33W'
    },

    "xiaomi-redmi-note-13-pro": {
        tela: '6.67" AMOLED 1.5K 120 Hz',
        bateria: 5100,
        camera: '200 MP OIS + 8 MP + 2 MP / frontal 16 MP',
        carregamento: '67W'
    },

    "xiaomi-redmi-note-13-pro-plus": {
        tela: '6.67" AMOLED 1.5K 120 Hz',
        bateria: 5000,
        camera: '200 MP OIS + 8 MP + 2 MP / frontal 16 MP',
        carregamento: '120W'
    },

    "xiaomi-14": {
        tela: '6.36" LTPO AMOLED 120 Hz',
        bateria: 4610,
        camera: '50 MP + 50 MP tele + 50 MP ultrawide / frontal 32 MP',
        carregamento: '120W'
    },

    "motorola-g54": {
        tela: '6.5" IPS LCD 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 2 MP / frontal 16 MP',
        carregamento: '20W'
    },

    "motorola-g84": {
        tela: '6.55" pOLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 8 MP ultrawide/macro / frontal 16 MP',
        carregamento: '30W'
    },

    "motorola-edge-40": {
        tela: '6.55" pOLED 144 Hz',
        bateria: 4400,
        camera: '50 MP OIS + 13 MP ultrawide/macro / frontal 32 MP',
        carregamento: '68W'
    },

    "motorola-edge-50-pro": {
        tela: '6.7" pOLED 144 Hz',
        bateria: 4500,
        camera: '50 MP OIS + 13 MP ultrawide + 10 MP tele 3x / frontal 50 MP',
        carregamento: '125W'
    },

    "realme-c67": {
        tela: '6.72" IPS LCD 90 Hz',
        bateria: 5000,
        camera: '108 MP + 2 MP / frontal 8 MP',
        carregamento: '33W'
    },

    "realme-12-pro": {
        tela: '6.7" OLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 32 MP tele 2x + 8 MP ultrawide / frontal 16 MP',
        carregamento: '67W'
    },

    "realme-gt-6": {
        tela: '6.78" LTPO AMOLED 120 Hz',
        bateria: 5500,
        camera: '50 MP OIS + 50 MP tele + 8 MP ultrawide / frontal 32 MP',
        carregamento: '120W'
    },

    "asus-zenfone-10": {
        tela: '5.9" AMOLED até 144 Hz',
        bateria: 4300,
        camera: '50 MP OIS/gimbal + 13 MP ultrawide / frontal 32 MP',
        carregamento: '30W'
    },

    "asus-rog-phone-8": {
        tela: '6.78" Samsung Flexible AMOLED 165 Hz',
        bateria: 5500,
        camera: '50 MP OIS + 13 MP ultrawide + 32 MP tele 3x / frontal 32 MP',
        carregamento: '65W'
    },

    "poco-x6": {
        tela: '6.67" AMOLED 120 Hz',
        bateria: 5100,
        camera: '64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP',
        carregamento: '67W'
    },

    "poco-x6-pro": {
        tela: '6.67" Flow AMOLED 120 Hz',
        bateria: 5000,
        camera: '64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP',
        carregamento: '67W'
    },

    "poco-f6": {
        tela: '6.67" AMOLED 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 8 MP ultrawide / frontal 20 MP',
        carregamento: '90W'
    },

    "google-pixel-8": {
        tela: '6.2" OLED Actua 120 Hz',
        bateria: 4575,
        camera: '50 MP OIS + 12 MP ultrawide / frontal 10.5 MP',
        carregamento: '27W'
    },

    "google-pixel-8-pro": {
        tela: '6.7" LTPO OLED 120 Hz',
        bateria: 5050,
        camera: '50 MP + 48 MP ultrawide + 48 MP tele 5x / frontal 10.5 MP',
        carregamento: '30W'
    },

    "oneplus-12": {
        tela: '6.82" LTPO AMOLED 120 Hz',
        bateria: 5400,
        camera: '50 MP OIS + 64 MP tele 3x + 48 MP ultrawide / frontal 32 MP',
        carregamento: '100W'
    },

    "honor-90": {
        tela: '6.7" AMOLED 1.5K 120 Hz',
        bateria: 5000,
        camera: '200 MP + 12 MP ultrawide/macro + 2 MP profundidade / frontal 50 MP',
        carregamento: '66W'
    },

    "oppo-reno-11": {
        tela: '6.7" AMOLED curva 120 Hz',
        bateria: 5000,
        camera: '50 MP OIS + 32 MP tele + 8 MP ultrawide / frontal 32 MP',
        carregamento: '67W'
    },

    "nothing-phone-2": {
        tela: '6.7" LTPO OLED 1–120 Hz',
        bateria: 4700,
        camera: '50 MP OIS + 50 MP ultrawide / frontal 32 MP',
        carregamento: '45W'
    }
};


/* =========================================================
   💻 ESPECIFICAÇÕES DOS PCS E NOTEBOOKS
========================================================= */

const especificacoesPCs = {

    "lenovo-ideapad-3": {
        tela: '15.6" Full HD',
        bateria: '45 Wh',
        placaMae: 'Lenovo OEM',
        fonte: '65W',
        gabinete: 'Notebook',
        refrigeracao: 'Cooler interno',
        tipoTela: 'IPS / Full HD'
    },

    "lenovo-loq": {
        tela: '15.6" Full HD 144 Hz',
        bateria: '60 Wh',
        placaMae: 'Lenovo OEM',
        fonte: '170W',
        gabinete: 'Notebook Gamer',
        refrigeracao: 'Sistema térmico com heatpipes',
        tipoTela: 'IPS 144 Hz'
    },

    "asus-vivobook": {
        tela: '15.6" Full HD',
        bateria: '42 Wh',
        placaMae: 'ASUS OEM',
        fonte: '65W',
        gabinete: 'Notebook',
        refrigeracao: 'Cooler interno',
        tipoTela: 'OLED / IPS conforme versão'
    },

    "asus-tuf-gaming": {
        tela: '15.6" Full HD 144 Hz',
        bateria: '90 Wh',
        placaMae: 'ASUS OEM',
        fonte: '240W',
        gabinete: 'Notebook Gamer',
        refrigeracao: 'TUF Cooling / heatpipes',
        tipoTela: 'IPS 144 Hz'
    },

    "acer-aspire-5": {
        tela: '15.6" Full HD',
        bateria: '50 Wh',
        placaMae: 'Acer OEM',
        fonte: '65W',
        gabinete: 'Notebook',
        refrigeracao: 'Cooler interno',
        tipoTela: 'IPS / Full HD'
    },

    "acer-nitro-v": {
        tela: '15.6" Full HD 144 Hz',
        bateria: '57 Wh',
        placaMae: 'Acer OEM',
        fonte: '135W+',
        gabinete: 'Notebook Gamer',
        refrigeracao: 'NitroSense / heatpipes',
        tipoTela: 'IPS 144 Hz'
    },

    "dell-inspiron": {
        tela: '15.6" Full HD',
        bateria: '41 Wh',
        placaMae: 'Dell OEM',
        fonte: '65W',
        gabinete: 'Notebook',
        refrigeracao: 'Cooler interno',
        tipoTela: 'WVA / Full HD'
    },

    "hp-250": {
        tela: '15.6" Full HD',
        bateria: '41 Wh',
        placaMae: 'HP OEM',
        fonte: '65W',
        gabinete: 'Notebook',
        refrigeracao: 'Cooler interno',
        tipoTela: 'IPS / Full HD'
    },

    "pc-ryzen-5-5600g": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'AM4 B450/B550',
        fonte: '500W',
        gabinete: 'Micro-ATX / ATX',
        refrigeracao: 'Cooler box AMD',
        tipoTela: 'Não se aplica'
    },

    "pc-ryzen-5-5600": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'AM4 B450/B550',
        fonte: '550W',
        gabinete: 'ATX / Micro-ATX',
        refrigeracao: 'Air cooler',
        tipoTela: 'Não se aplica'
    },

    "pc-ryzen-7-5700x": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'AM4 B550',
        fonte: '650W',
        gabinete: 'ATX',
        refrigeracao: 'Air cooler torre',
        tipoTela: 'Não se aplica'
    },

    "pc-core-i3": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'LGA1200 / 1700 conforme versão',
        fonte: '400W',
        gabinete: 'Micro-ATX',
        refrigeracao: 'Cooler Intel',
        tipoTela: 'Não se aplica'
    },

    "pc-core-i5": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'LGA1200 / 1700 conforme versão',
        fonte: '550W',
        gabinete: 'ATX / Micro-ATX',
        refrigeracao: 'Air cooler',
        tipoTela: 'Não se aplica'
    },

    "pc-core-i7": {
        tela: 'Não se aplica',
        bateria: 'Não se aplica',
        placaMae: 'LGA1200 / 1700 conforme versão',
        fonte: '650W',
        gabinete: 'ATX',
        refrigeracao: 'Air cooler torre',
        tipoTela: 'Não se aplica'
    },

    "msi-katana": {
        tela: '15.6" Full HD 144 Hz',
        bateria: '53.5 Wh',
        placaMae: 'MSI OEM',
        fonte: '180W',
        gabinete: 'Notebook Gamer',
        refrigeracao: 'Cooler Boost / heatpipes',
        tipoTela: 'IPS 144 Hz'
    },

    "gigabyte-g5": {
        tela: '15.6" Full HD 144 Hz',
        bateria: '54 Wh',
        placaMae: 'Gigabyte OEM',
        fonte: '150W',
        gabinete: 'Notebook Gamer',
        refrigeracao: 'Cooler interno / heatpipes',
        tipoTela: 'IPS 144 Hz'
    }
};


/* =========================================================
   🔗 APLICAÇÃO DAS ESPECIFICAÇÕES
========================================================= */

celulares.forEach(item => {

    Object.assign(
        item,
        especificacoesCelulares[item.id] || {}
    );

});

pcs.forEach(item => {

    Object.assign(
        item,
        especificacoesPCs[item.id] || {}
    );

});


/* =========================================================
   🌐 DISPONIBILIZAR PARA O SITE
========================================================= */

window.celulares = celulares;
window.pcs = pcs;

window.especificacoesCelulares =
    especificacoesCelulares;

window.especificacoesPCs =
    especificacoesPCs;


/* =========================================================
   🏷️ MARCAS
========================================================= */

const marcasCelulares = [
    "Samsung",
    "Apple",
    "Xiaomi",
    "POCO",
    "Motorola",
    "Realme",
    "ASUS",
    "Google",
    "OnePlus",
    "Honor",
    "OPPO",
    "Nothing"
];

const marcasPCs = [
    "Lenovo",
    "ASUS",
    "Acer",
    "Dell",
    "HP",
    "AMD",
    "Intel",
    "MSI",
    "Gigabyte"
];


/* =========================================================
   📦 TODOS OS PRODUTOS
========================================================= */

const todosProdutos = [
    ...celulares,
    ...pcs
];


/* =========================================================
   💰 FORMATAÇÃO DE PREÇO
========================================================= */

function precoBRL(valor) {

    const numero = Number(valor);

    if (
        valor === null ||
        valor === undefined ||
        valor === "" ||
        !Number.isFinite(numero) ||
        numero <= 0
    ) {
        return "Preço não informado";
    }

    return numero.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* =========================================================
   🏆 NOTA GERAL
========================================================= */

function calcularNota(produto) {

    const desempenho =
        Number(produto.desempenho) || 0;

    const jogos =
        Number(produto.jogos) || 0;

    const qualidade =
        Number(produto.qualidade) || 0;

    return Math.round(
        (
            desempenho +
            jogos +
            qualidade
        ) / 3
    );
}


/* =========================================================
   🏆 RANKING
========================================================= */

function ordenarPorRanking(lista) {

    return [...lista].sort(
        (a, b) =>
            calcularNota(b) -
            calcularNota(a)
    );

}


/* =========================================================
   🔎 PESQUISA
========================================================= */

function pesquisarProdutos(
    lista,
    termo
) {

    const busca =
        String(termo || "")
            .toLowerCase()
            .trim();

    if (!busca) {
        return [...lista];
    }

    return lista.filter(produto => {

        return (

            String(produto.nome || "")
                .toLowerCase()
                .includes(busca)

            ||

            String(produto.marca || "")
                .toLowerCase()
                .includes(busca)

            ||

            String(produto.processador || "")
                .toLowerCase()
                .includes(busca)

            ||

            String(produto.categoria || "")
                .toLowerCase()
                .includes(busca)

        );

    });

}


/* =========================================================
   💰 PRODUTOS COM PREÇO
========================================================= */

function produtosComPreco(lista) {

    return lista.filter(produto => {

        const preco =
            Number(produto.preco);

        return (
            Number.isFinite(preco) &&
            preco > 0
        );

    });

}


/* =========================================================
   📊 ESTATÍSTICAS
========================================================= */

function estatisticasCatalogo() {

    return {

        celulares:
            celulares.length,

        pcs:
            pcs.length,

        total:
            todosProdutos.length,

        marcasCelulares:
            marcasCelulares.length,

        marcasPCs:
            marcasPCs.length

    };

}


/* =========================================================
   🌐 DISPONIBILIZAR FUNÇÕES
========================================================= */

window.marcasCelulares =
    marcasCelulares;

window.marcasPCs =
    marcasPCs;

window.todosProdutos =
    todosProdutos;

window.precoBRL =
    precoBRL;

window.calcularNota =
    calcularNota;

window.ordenarPorRanking =
    ordenarPorRanking;

window.pesquisarProdutos =
    pesquisarProdutos;

window.produtosComPreco =
    produtosComPreco;

window.estatisticasCatalogo =
    estatisticasCatalogo;


/* =========================================================
   🧪 TESTE
========================================================= */

console.log(
    "===================================="
);

console.log(
    "📱 CELULARRANK"
);

console.log(
    "===================================="
);

console.log(
    "Celulares:",
    celulares.length
);

console.log(
    "PCs/Notebooks:",
    pcs.length
);

console.log(
    "Total:",
    todosProdutos.length
);

console.log(
    "===================================="
);

console.log(
    "✅ dados.js carregado corretamente!"
);

console.log(
    "===================================="
);
