/* =========================================================
   CELULARRANK-OFFICIAL — BANCO DE DADOS
   Os dados ficam em window.celulares e window.pcs
   para todas as páginas conseguirem acessá-los.
========================================================= */


/* =========================================================
   📱 CELULARES
========================================================= */

window.celulares = [

    {
        id: "samsung-a15-5g",
        nome: "Galaxy A15 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 900,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 6100+",
        desempenho: 70,
        jogos: 65,
        qualidade: 82,
        camera: "50 MP + 5 MP + 2 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" Super AMOLED • 90 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-a25-5g",
        nome: "Galaxy A25 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 1300,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1280",
        desempenho: 76,
        jogos: 72,
        qualidade: 86,
        camera: "50 MP OIS + 8 MP + 2 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" Super AMOLED • 120 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-a35-5g",
        nome: "Galaxy A35 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 1800,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1380",
        desempenho: 82,
        jogos: 78,
        qualidade: 90,
        camera: "50 MP OIS + 8 MP + 5 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,6\" Super AMOLED • 120 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-a55-5g",
        nome: "Galaxy A55 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1480",
        desempenho: 86,
        jogos: 82,
        qualidade: 93,
        camera: "50 MP OIS + 12 MP + 5 MP / frontal 32 MP",
        bateria: "5.000 mAh",
        tela: "6,6\" Super AMOLED • 120 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-s23",
        nome: "Galaxy S23",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2600,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Snapdragon 8 Gen 2 for Galaxy",
        desempenho: 93,
        jogos: 92,
        qualidade: 96,
        camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.900 mAh",
        tela: "6,1\" Dynamic AMOLED 2X • 120 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-s24",
        nome: "Galaxy S24",
        marca: "Samsung",
        categoria: "Celular",
        preco: 3500,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 2400",
        desempenho: 95,
        jogos: 93,
        qualidade: 97,
        camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
        bateria: "4.000 mAh",
        tela: "6,2\" Dynamic AMOLED 2X • 120 Hz",
        carregamento: "25 W"
    },

    {
        id: "samsung-s24-ultra",
        nome: "Galaxy S24 Ultra",
        marca: "Samsung",
        categoria: "Celular",
        preco: 5500,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 3 for Galaxy",
        desempenho: 100,
        jogos: 100,
        qualidade: 100,
        camera: "200 MP + 50 MP + 10 MP + 12 MP / frontal 12 MP",
        bateria: "5.000 mAh",
        tela: "6,8\" Dynamic AMOLED 2X • QHD+ • 120 Hz",
        carregamento: "45 W"
    },


    /* =====================================================
       🍎 APPLE
    ===================================================== */

    {
        id: "iphone-13",
        nome: "iPhone 13",
        marca: "Apple",
        categoria: "Celular",
        preco: 3000,
        ram: "4 GB",
        armazenamento: "128 GB",
        processador: "Apple A15 Bionic",
        desempenho: 88,
        jogos: 86,
        qualidade: 94,
        camera: "12 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.227 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W"
    },

    {
        id: "iphone-14",
        nome: "iPhone 14",
        marca: "Apple",
        categoria: "Celular",
        preco: 3400,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "Apple A15 Bionic",
        desempenho: 89,
        jogos: 87,
        qualidade: 95,
        camera: "12 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.279 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W"
    },

    {
        id: "iphone-15",
        nome: "iPhone 15",
        marca: "Apple",
        categoria: "Celular",
        preco: 3900,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "Apple A16 Bionic",
        desempenho: 93,
        jogos: 91,
        qualidade: 96,
        camera: "48 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.349 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W"
    },

    {
        id: "iphone-15-pro",
        nome: "iPhone 15 Pro",
        marca: "Apple",
        categoria: "Celular",
        preco: 5000,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Apple A17 Pro",
        desempenho: 98,
        jogos: 98,
        qualidade: 99,
        camera: "48 MP + 12 MP ultrawide + 12 MP telefoto 3x / frontal 12 MP",
        bateria: "3.274 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • ProMotion 120 Hz",
        carregamento: "20 W"
    },

    {
        id: "iphone-16",
        nome: "iPhone 16",
        marca: "Apple",
        categoria: "Celular",
        preco: 4800,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Apple A18",
        desempenho: 97,
        jogos: 96,
        qualidade: 98,
        camera: "48 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.561 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W"
    },


    /* =====================================================
       🟧 XIAOMI
    ===================================================== */

    {
        id: "redmi-note-13",
        nome: "Redmi Note 13",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 685",
        desempenho: 72,
        jogos: 65,
        qualidade: 84,
        camera: "108 MP + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "33 W"
    },

    {
        id: "redmi-note-13-pro",
        nome: "Redmi Note 13 Pro",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1800,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7s Gen 2",
        desempenho: 84,
        jogos: 80,
        qualidade: 90,
        camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.100 mAh",
        tela: "6,67\" AMOLED 1,5K • 120 Hz",
        carregamento: "67 W"
    },

    {
        id: "redmi-note-13-pro-plus",
        nome: "Redmi Note 13 Pro+",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 2300,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7200-Ultra",
        desempenho: 89,
        jogos: 86,
        qualidade: 93,
        camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED 1,5K • 120 Hz",
        carregamento: "120 W"
    },

    {
        id: "xiaomi-14",
        nome: "Xiaomi 14",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 5000,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 98,
        jogos: 98,
        qualidade: 98,
        camera: "50 MP + 50 MP telefoto + 50 MP ultrawide / frontal 32 MP",
        bateria: "4.610 mAh",
        tela: "6,36\" LTPO AMOLED • 120 Hz",
        carregamento: "90 W"
    },


    /* =====================================================
       🟩 MOTOROLA
    ===================================================== */

    {
        id: "moto-g54-5g",
        nome: "Moto G54 5G",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7020",
        desempenho: 73,
        jogos: 68,
        qualidade: 83,
        camera: "50 MP OIS + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" IPS LCD • 120 Hz",
        carregamento: "20 W"
    },

    {
        id: "moto-g84-5g",
        nome: "Moto G84 5G",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1400,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 695",
        desempenho: 74,
        jogos: 69,
        qualidade: 88,
        camera: "50 MP OIS + 8 MP ultrawide/macro / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,55\" pOLED • 120 Hz",
        carregamento: "30 W"
    },

    {
        id: "motorola-edge-40",
        nome: "Motorola Edge 40",
        marca: "Motorola",
        categoria: "Celular",
        preco: 2200,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 8020",
        desempenho: 84,
        jogos: 80,
        qualidade: 92,
        camera: "50 MP OIS + 13 MP ultrawide/macro / frontal 32 MP",
        bateria: "4.400 mAh",
        tela: "6,55\" pOLED • 144 Hz",
        carregamento: "68 W"
    },

    {
        id: "motorola-edge-50-pro",
        nome: "Motorola Edge 50 Pro",
        marca: "Motorola",
        categoria: "Celular",
        preco: 3500,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7 Gen 3",
        desempenho: 90,
        jogos: 86,
        qualidade: 96,
        camera: "50 MP OIS + 13 MP ultrawide/macro + 10 MP telefoto 3x / frontal 50 MP",
        bateria: "4.500 mAh",
        tela: "6,7\" pOLED • 144 Hz",
        carregamento: "125 W"
    },


    /* =====================================================
       🟦 REALME
    ===================================================== */

    {
        id: "realme-c67",
        nome: "Realme C67",
        marca: "Realme",
        categoria: "Celular",
        preco: 1100,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 685",
        desempenho: 70,
        jogos: 62,
        qualidade: 82,
        camera: "108 MP + 2 MP / frontal 8 MP",
        bateria: "5.000 mAh",
        tela: "6,72\" IPS LCD • 90 Hz",
        carregamento: "33 W"
    },

    {
        id: "realme-12-pro",
        nome: "Realme 12 Pro",
        marca: "Realme",
        categoria: "Celular",
        preco: 2800,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 6 Gen 1",
        desempenho: 80,
        jogos: 75,
        qualidade: 93,
        camera: "50 MP OIS + 32 MP telefoto 2x + 8 MP ultrawide / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" OLED • 120 Hz",
        carregamento: "67 W"
    },

    {
        id: "realme-gt-6",
        nome: "Realme GT 6",
        marca: "Realme",
        categoria: "Celular",
        preco: 4200,
        ram: "16 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8s Gen 3",
        desempenho: 96,
        jogos: 95,
        qualidade: 97,
        camera: "50 MP OIS + 50 MP telefoto + 8 MP ultrawide / frontal 32 MP",
        bateria: "5.500 mAh",
        tela: "6,78\" LTPO AMOLED • 120 Hz",
        carregamento: "120 W"
    },


    /* =====================================================
       🟪 ASUS
    ===================================================== */

    {
        id: "asus-zenfone-10",
        nome: "Zenfone 10",
        marca: "ASUS",
        categoria: "Celular",
        preco: 3500,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 2",
        desempenho: 94,
        jogos: 92,
        qualidade: 96,
        camera: "50 MP OIS/Gimbal + 13 MP ultrawide / frontal 32 MP",
        bateria: "4.300 mAh",
        tela: "5,9\" AMOLED • até 144 Hz",
        carregamento: "30 W"
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
        qualidade: 98,
        camera: "50 MP OIS + 13 MP ultrawide + 32 MP telefoto 3x / frontal 32 MP",
        bateria: "5.500 mAh",
        tela: "6,78\" Samsung Flexible AMOLED • até 165 Hz",
        carregamento: "65 W"
    },


    /* =====================================================
       🟨 POCO
    ===================================================== */

    {
        id: "poco-x6",
        nome: "POCO X6",
        marca: "POCO",
        categoria: "Celular",
        preco: 1700,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7s Gen 2",
        desempenho: 84,
        jogos: 80,
        qualidade: 89,
        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP",
        bateria: "5.100 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "67 W"
    },

    {
        id: "poco-x6-pro",
        nome: "POCO X6 Pro",
        marca: "POCO",
        categoria: "Celular Gamer",
        preco: 2100,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 8300-Ultra",
        desempenho: 94,
        jogos: 94,
        qualidade: 91,
        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" Flow AMOLED • 120 Hz",
        carregamento: "67 W"
    },

    {
        id: "poco-f6",
        nome: "POCO F6",
        marca: "POCO",
        categoria: "Celular Gamer",
        preco: 2800,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8s Gen 3",
        desempenho: 96,
        jogos: 97,
        qualidade: 93,
        camera: "50 MP OIS + 8 MP ultrawide / frontal 20 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "90 W"
    },


    /* =====================================================
       🟦 GOOGLE
    ===================================================== */

    {
        id: "google-pixel-8",
        nome: "Pixel 8",
        marca: "Google",
        categoria: "Celular",
        preco: 3500,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Google Tensor G3",
        desempenho: 88,
        jogos: 84,
        qualidade: 96,
        camera: "50 MP OIS + 12 MP ultrawide / frontal 10,5 MP",
        bateria: "4.575 mAh",
        tela: "6,2\" OLED Actua • 120 Hz",
        carregamento: "27 W"
    },

    {
        id: "google-pixel-8-pro",
        nome: "Pixel 8 Pro",
        marca: "Google",
        categoria: "Celular",
        preco: 5000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Google Tensor G3",
        desempenho: 91,
        jogos: 88,
        qualidade: 99,
        camera: "50 MP + 48 MP ultrawide + 48 MP telefoto 5x / frontal 10,5 MP",
        bateria: "5.050 mAh",
        tela: "6,7\" LTPO OLED • 120 Hz",
        carregamento: "30 W"
    },


    /* =====================================================
       🟩 ONEPLUS
    ===================================================== */

    {
        id: "oneplus-12",
        nome: "OnePlus 12",
        marca: "OnePlus",
        categoria: "Celular",
        preco: 5000,
        ram: "16 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 99,
        jogos: 99,
        qualidade: 98,
        camera: "50 MP OIS + 64 MP telefoto 3x + 48 MP ultrawide / frontal 32 MP",
        bateria: "5.400 mAh",
        tela: "6,82\" LTPO AMOLED • 120 Hz",
        carregamento: "100 W"
    },


    /* =====================================================
       🟧 HONOR
    ===================================================== */

    {
        id: "honor-90",
        nome: "Honor 90",
        marca: "Honor",
        categoria: "Celular",
        preco: 2500,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 7 Gen 1 Accelerated Edition",
        desempenho: 82,
        jogos: 76,
        qualidade: 94,
        camera: "200 MP + 12 MP ultrawide/macro + 2 MP profundidade / frontal 50 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" AMOLED 1,5K • 120 Hz",
        carregamento: "66 W"
    },


    /* =====================================================
       🟥 OPPO
    ===================================================== */

    {
        id: "oppo-reno-11",
        nome: "OPPO Reno 11",
        marca: "OPPO",
        categoria: "Celular",
        preco: 3000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7050",
        desempenho: 80,
        jogos: 74,
        qualidade: 93,
        camera: "50 MP OIS + 32 MP telefoto + 8 MP ultrawide / frontal 32 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" AMOLED curva • 120 Hz",
        carregamento: "67 W"
    },


    /* =====================================================
       ⬜ NOTHING
    ===================================================== */

    {
        id: "nothing-phone-2",
        nome: "Nothing Phone (2)",
        marca: "Nothing",
        categoria: "Celular",
        preco: 3000,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8+ Gen 1",
        desempenho: 88,
        jogos: 84,
        qualidade: 95,
        camera: "50 MP OIS + 50 MP ultrawide / frontal 32 MP",
        bateria: "4.700 mAh",
        tela: "6,7\" LTPO OLED • 120 Hz",
        carregamento: "45 W"
    }

];


/* =========================================================
   💻 PCS / NOTEBOOKS
========================================================= */

window.pcs = [

    {
        id: "lenovo-ideapad-3",
        nome: "IdeaPad 3",
        marca: "Lenovo",
        categoria: "Notebook",
        preco: 3000,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Ryzen 5",
        video: "Radeon integrada",
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
        video: "Intel integrada",
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
        video: "Intel integrada",
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
        video: "Intel integrada",
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
        video: "Intel integrada",
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
        video: "Radeon Vega integrada",
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
        video: "Intel integrada",
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
   🔗 BANCO UNIFICADO
========================================================= */

window.todosProdutos = [

    ...window.celulares,
    ...window.pcs

];


/* =========================================================
   ✅ TESTE
========================================================= */

console.log(
    `CelularRank: ${window.celulares.length} celulares e ${window.pcs.length} PCs carregados.`
);

/* =========================================================
   🏷️ MARCAS
========================================================= */

const marcasCelulares = [
    ...new Set(
        celulares.map(
            celular => celular.marca
        )
    )
];


const marcasPCs = [
    ...new Set(
        pcs.map(
            pc => pc.marca
        )
    )
];


/* =========================================================
   💰 FORMATAR PREÇO
========================================================= */

function precoBRL(valor) {

    const numero = Number(valor);

    if (
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
   🏆 CALCULAR NOTA
========================================================= */

function calcularNota(produto) {

    const notas = [

        Number(produto.desempenho),
        Number(produto.jogos),
        Number(produto.trabalho),
        Number(produto.qualidade)

    ].filter(
        numero => Number.isFinite(numero)
    );


    if (notas.length === 0) {

        return 0;

    }


    const media =
        notas.reduce(
            (total, numero) =>
                total + numero,
            0
        ) / notas.length;


    return Math.round(media);

}


/* =========================================================
   🏆 ORDENAR POR RANKING
========================================================= */

function ordenarPorRanking(lista) {

    return [...lista].sort(
        (a, b) =>
            calcularNota(b) -
            calcularNota(a)
    );

}


/* =========================================================
   🔎 PESQUISAR
========================================================= */

function pesquisarProdutos(
    lista,
    termo
) {

    const busca =
        String(termo || "")
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );


    if (!busca) {

        return [...lista];

    }


    return lista.filter(
        produto => {

            const texto = [

                produto.nome,
                produto.marca,
                produto.categoria,
                produto.processador,
                produto.video,
                produto.ram,
                produto.armazenamento

            ]
            .map(
                valor =>
                    String(valor || "")
            )
            .join(" ")
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );


            return texto.includes(busca);

        }
    );

}


/* =========================================================
   📊 ESTATÍSTICAS
========================================================= */

function estatisticasCatalogo() {

    return {

        celulares: celulares.length,

        pcs: pcs.length,

        total: todosProdutos.length,

        marcasCelulares:
            marcasCelulares.length,

        marcasPCs:
            marcasPCs.length

    };

}


/* =========================================================
   🌐 COMPATIBILIDADE
========================================================= */

window.celulares = celulares;

window.pcs = pcs;

window.todosProdutos =
    todosProdutos;

window.marcasCelulares =
    marcasCelulares;

window.marcasPCs =
    marcasPCs;

window.precoBRL =
    precoBRL;

window.calcularNota =
    calcularNota;

window.ordenarPorRanking =
    ordenarPorRanking;

window.pesquisarProdutos =
    pesquisarProdutos;

window.estatisticasCatalogo =
    estatisticasCatalogo;


console.log(
    "📱 Celulares:",
    celulares.length
);

console.log(
    "💻 PCs:",
    pcs.length
);

console.log(
    "📦 Total:",
    todosProdutos.length
);

console.log(
    "✅ CelularRank dados.js carregado!"
);
