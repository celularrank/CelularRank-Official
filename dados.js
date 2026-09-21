// ======================================================
// CELULARRANK-OFFICIAL
// BANCO DE DADOS DE CELULARES E PCS
// ======================================================

const celulares = [

  {
    id: "galaxy-a15-5g",
    nome: "Samsung Galaxy A15 5G",
    marca: "Samsung",
    categoria: "Celular",
    preco: 899,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "MediaTek Dimensity 6100+",
    desempenho: 67,
    jogos: 64,
    qualidade: 78,
    camera: "50 MP + 5 MP + 2 MP / frontal 13 MP",
    bateria: "5000 mAh",
    tela: "6.5 AMOLED 90Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-a25-5g",
    nome: "Samsung Galaxy A25 5G",
    marca: "Samsung",
    categoria: "Celular",
    preco: 1199,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Exynos 1280",
    desempenho: 72,
    jogos: 70,
    qualidade: 82,
    camera: "50 MP OIS + 8 MP + 2 MP / frontal 13 MP",
    bateria: "5000 mAh",
    tela: "6.5 Super AMOLED 120Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-a35-5g",
    nome: "Samsung Galaxy A35 5G",
    marca: "Samsung",
    categoria: "Celular",
    preco: 1699,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Exynos 1380",
    desempenho: 79,
    jogos: 77,
    qualidade: 87,
    camera: "50 MP OIS + 8 MP + 5 MP / frontal 13 MP",
    bateria: "5000 mAh",
    tela: "6.6 Super AMOLED 120Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-a55-5g",
    nome: "Samsung Galaxy A55 5G",
    marca: "Samsung",
    categoria: "Celular",
    preco: 1999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Exynos 1480",
    desempenho: 84,
    jogos: 82,
    qualidade: 91,
    camera: "50 MP OIS + 12 MP + 5 MP / frontal 32 MP",
    bateria: "5000 mAh",
    tela: "6.6 Super AMOLED 120Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-s23",
    nome: "Samsung Galaxy S23",
    marca: "Samsung",
    categoria: "Celular",
    preco: 2499,
    ram: "8 GB",
    armazenamento: "128 GB",
    processador: "Snapdragon 8 Gen 2",
    desempenho: 92,
    jogos: 94,
    qualidade: 94,
    camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
    bateria: "3900 mAh",
    tela: "6.1 Dynamic AMOLED 2X 120Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-s24",
    nome: "Samsung Galaxy S24",
    marca: "Samsung",
    categoria: "Celular",
    preco: 3999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Exynos 2400",
    desempenho: 94,
    jogos: 94,
    qualidade: 96,
    camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
    bateria: "4000 mAh",
    tela: "6.2 Dynamic AMOLED 2X 120Hz",
    carregamento: "25W"
  },

  {
    id: "galaxy-s24-ultra",
    nome: "Samsung Galaxy S24 Ultra",
    marca: "Samsung",
    categoria: "Celular",
    preco: 6999,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8 Gen 3",
    desempenho: 100,
    jogos: 100,
    qualidade: 100,
    camera: "200 MP + 50 MP + 10 MP + 12 MP / frontal 12 MP",
    bateria: "5000 mAh",
    tela: "6.8 Dynamic AMOLED 2X QHD+ 120Hz",
    carregamento: "45W"
  },

  {
    id: "iphone-13",
    nome: "iPhone 13",
    marca: "Apple",
    categoria: "Celular",
    preco: 2999,
    ram: "4 GB",
    armazenamento: "128 GB",
    processador: "Apple A15 Bionic",
    desempenho: 88,
    jogos: 90,
    qualidade: 91,
    camera: "12 MP + 12 MP / frontal 12 MP",
    bateria: "3227 mAh",
    tela: "6.1 Super Retina XDR OLED 60Hz",
    carregamento: "20W"
  },

  {
    id: "iphone-14",
    nome: "iPhone 14",
    marca: "Apple",
    categoria: "Celular",
    preco: 3499,
    ram: "6 GB",
    armazenamento: "128 GB",
    processador: "Apple A15 Bionic",
    desempenho: 89,
    jogos: 91,
    qualidade: 92,
    camera: "12 MP + 12 MP / frontal 12 MP",
    bateria: "3279 mAh",
    tela: "6.1 OLED 60Hz",
    carregamento: "20W"
  },

  {
    id: "iphone-15",
    nome: "iPhone 15",
    marca: "Apple",
    categoria: "Celular",
    preco: 3999,
    ram: "6 GB",
    armazenamento: "128 GB",
    processador: "Apple A16 Bionic",
    desempenho: 93,
    jogos: 94,
    qualidade: 94,
    camera: "48 MP + 12 MP / frontal 12 MP",
    bateria: "3349 mAh",
    tela: "6.1 OLED 60Hz",
    carregamento: "20W"
  },

  {
    id: "iphone-15-pro",
    nome: "iPhone 15 Pro",
    marca: "Apple",
    categoria: "Celular",
    preco: 5499,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Apple A17 Pro",
    desempenho: 98,
    jogos: 99,
    qualidade: 98,
    camera: "48 MP + 12 MP ultrawide + 12 MP telefoto 3x / frontal 12 MP",
    bateria: "3274 mAh",
    tela: "6.1 OLED ProMotion 120Hz",
    carregamento: "20W"
  },

  {
    id: "iphone-16",
    nome: "iPhone 16",
    marca: "Apple",
    categoria: "Celular",
    preco: 4999,
    ram: "8 GB",
    armazenamento: "128 GB",
    processador: "Apple A18",
    desempenho: 97,
    jogos: 98,
    qualidade: 97,
    camera: "48 MP + 12 MP / frontal 12 MP",
    bateria: "3561 mAh",
    tela: "6.1 OLED",
    carregamento: "20W"
  },

  {
    id: "redmi-note-13",
    nome: "Redmi Note 13",
    marca: "Xiaomi",
    categoria: "Celular",
    preco: 999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 685",
    desempenho: 67,
    jogos: 64,
    qualidade: 79,
    camera: "108 MP + 8 MP + 2 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.67 AMOLED 120Hz",
    carregamento: "33W"
  },

  {
    id: "redmi-note-13-pro",
    nome: "Redmi Note 13 Pro",
    marca: "Xiaomi",
    categoria: "Celular",
    preco: 1499,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 7s Gen 2",
    desempenho: 82,
    jogos: 80,
    qualidade: 89,
    camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
    bateria: "5100 mAh",
    tela: "6.67 AMOLED 1.5K 120Hz",
    carregamento: "67W"
  },

  {
    id: "redmi-note-13-pro-plus",
    nome: "Redmi Note 13 Pro+",
    marca: "Xiaomi",
    categoria: "Celular",
    preco: 2199,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "MediaTek Dimensity 7200 Ultra",
    desempenho: 88,
    jogos: 87,
    qualidade: 94,
    camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.67 AMOLED 1.5K 120Hz",
    carregamento: "120W"
  },

  {
    id: "xiaomi-14",
    nome: "Xiaomi 14",
    marca: "Xiaomi",
    categoria: "Celular",
    preco: 4999,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8 Gen 3",
    desempenho: 98,
    jogos: 98,
    qualidade: 98,
    camera: "50 MP + 50 MP telefoto + 50 MP ultrawide / frontal 32 MP",
    bateria: "4610 mAh",
    tela: "6.36 LTPO AMOLED 120Hz",
    carregamento: "120W"
  },

  {
    id: "moto-g54",
    nome: "Motorola Moto G54 5G",
    marca: "Motorola",
    categoria: "Celular",
    preco: 999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Dimensity 7020",
    desempenho: 70,
    jogos: 68,
    qualidade: 77,
    camera: "50 MP OIS + 2 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.5 IPS LCD 120Hz",
    carregamento: "20W"
  },

  {
    id: "moto-g84",
    nome: "Motorola Moto G84 5G",
    marca: "Motorola",
    categoria: "Celular",
    preco: 1199,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 695",
    desempenho: 70,
    jogos: 68,
    qualidade: 85,
    camera: "50 MP OIS + 8 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.55 pOLED 120Hz",
    carregamento: "30W"
  },

  {
    id: "edge-40",
    nome: "Motorola Edge 40",
    marca: "Motorola",
    categoria: "Celular",
    preco: 1799,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Dimensity 8020",
    desempenho: 82,
    jogos: 80,
    qualidade: 90,
    camera: "50 MP OIS + 13 MP / frontal 32 MP",
    bateria: "4400 mAh",
    tela: "6.55 pOLED 144Hz",
    carregamento: "68W"
  },

  {
    id: "edge-50-pro",
    nome: "Motorola Edge 50 Pro",
    marca: "Motorola",
    categoria: "Celular",
    preco: 3499,
    ram: "12 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 7 Gen 3",
    desempenho: 87,
    jogos: 85,
    qualidade: 95,
    camera: "50 MP OIS + 13 MP + 10 MP telefoto 3x / frontal 50 MP",
    bateria: "4500 mAh",
    tela: "6.7 pOLED 144Hz",
    carregamento: "125W"
  },

  {
    id: "realme-c67",
    nome: "Realme C67",
    marca: "Realme",
    categoria: "Celular",
    preco: 999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 685",
    desempenho: 65,
    jogos: 62,
    qualidade: 76,
    camera: "108 MP + 2 MP / frontal 8 MP",
    bateria: "5000 mAh",
    tela: "6.72 IPS LCD 90Hz",
    carregamento: "33W"
  },

  {
    id: "realme-12-pro",
    nome: "Realme 12 Pro",
    marca: "Realme",
    categoria: "Celular",
    preco: 2499,
    ram: "12 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 6 Gen 1",
    desempenho: 76,
    jogos: 74,
    qualidade: 91,
    camera: "50 MP OIS + 32 MP telefoto 2x + 8 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.7 OLED 120Hz",
    carregamento: "67W"
  },

  {
    id: "realme-gt-6",
    nome: "Realme GT 6",
    marca: "Realme",
    categoria: "Celular",
    preco: 3999,
    ram: "16 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8s Gen 3",
    desempenho: 96,
    jogos: 97,
    qualidade: 96,
    camera: "50 MP OIS + 50 MP telefoto + 8 MP ultrawide / frontal 32 MP",
    bateria: "5500 mAh",
    tela: "6.78 LTPO AMOLED 120Hz",
    carregamento: "120W"
  },

  {
    id: "zenfone-10",
    nome: "ASUS Zenfone 10",
    marca: "ASUS",
    categoria: "Celular",
    preco: 2999,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 8 Gen 2",
    desempenho: 93,
    jogos: 94,
    qualidade: 92,
    camera: "50 MP OIS/Gimbal + 13 MP ultrawide / frontal 32 MP",
    bateria: "4300 mAh",
    tela: "5.9 AMOLED 144Hz",
    carregamento: "30W"
  },

  {
    id: "rog-phone-8",
    nome: "ASUS ROG Phone 8",
    marca: "ASUS",
    categoria: "Celular",
    preco: 5999,
    ram: "16 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8 Gen 3",
    desempenho: 100,
    jogos: 100,
    qualidade: 98,
    camera: "50 MP OIS + 13 MP ultrawide + 32 MP telefoto 3x / frontal 32 MP",
    bateria: "5500 mAh",
    tela: "6.78 AMOLED 165Hz",
    carregamento: "65W"
  },

  {
    id: "poco-x6",
    nome: "POCO X6",
    marca: "POCO",
    categoria: "Celular",
    preco: 1499,
    ram: "8 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 7s Gen 2",
    desempenho: 82,
    jogos: 82,
    qualidade: 86,
    camera: "64 MP OIS + 8 MP + 2 MP / frontal 16 MP",
    bateria: "5100 mAh",
    tela: "6.67 AMOLED 120Hz",
    carregamento: "67W"
  },

  {
    id: "poco-x6-pro",
    nome: "POCO X6 Pro",
    marca: "POCO",
    categoria: "Celular",
    preco: 1999,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "Dimensity 8300 Ultra",
    desempenho: 94,
    jogos: 96,
    qualidade: 90,
    camera: "64 MP OIS + 8 MP + 2 MP / frontal 16 MP",
    bateria: "5000 mAh",
    tela: "6.67 Flow AMOLED 120Hz",
    carregamento: "67W"
  },

  {
    id: "poco-f6",
    nome: "POCO F6",
    marca: "POCO",
    categoria: "Celular",
    preco: 2499,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8s Gen 3",
    desempenho: 96,
    jogos: 98,
    qualidade: 91,
    camera: "50 MP OIS + 8 MP / frontal 20 MP",
    bateria: "5000 mAh",
    tela: "6.67 AMOLED 120Hz",
    carregamento: "90W"
  },

  {
    id: "pixel-8",
    nome: "Google Pixel 8",
    marca: "Google",
    categoria: "Celular",
    preco: 2999,
    ram: "8 GB",
    armazenamento: "128 GB",
    processador: "Google Tensor G3",
    desempenho: 86,
    jogos: 83,
    qualidade: 94,
    camera: "50 MP OIS + 12 MP ultrawide / frontal 10.5 MP",
    bateria: "4575 mAh",
    tela: "6.2 OLED 120Hz",
    carregamento: "27W"
  },

  {
    id: "pixel-8-pro",
    nome: "Google Pixel 8 Pro",
    marca: "Google",
    categoria: "Celular",
    preco: 4999,
    ram: "12 GB",
    armazenamento: "256 GB",
    processador: "Google Tensor G3",
    desempenho: 90,
    jogos: 87,
    qualidade: 98,
    camera: "50 MP + 48 MP ultrawide + 48 MP telefoto 5x / frontal 10.5 MP",
    bateria: "5050 mAh",
    tela: "6.7 LTPO OLED 120Hz",
    carregamento: "30W"
  },

  {
    id: "oneplus-12",
    nome: "OnePlus 12",
    marca: "OnePlus",
    categoria: "Celular",
    preco: 4999,
    ram: "16 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 8 Gen 3",
    desempenho: 99,
    jogos: 99,
    qualidade: 97,
    camera: "50 MP OIS + 64 MP telefoto 3x + 48 MP ultrawide / frontal 32 MP",
    bateria: "5400 mAh",
    tela: "6.82 LTPO AMOLED 120Hz",
    carregamento: "100W"
  },

  {
    id: "honor-90",
    nome: "Honor 90",
    marca: "Honor",
    categoria: "Celular",
    preco: 1999,
    ram: "12 GB",
    armazenamento: "512 GB",
    processador: "Snapdragon 7 Gen 1 Accelerated Edition",
    desempenho: 78,
    jogos: 76,
    qualidade: 91,
    camera: "200 MP + 12 MP + 2 MP / frontal 50 MP",
    bateria: "5000 mAh",
    tela: "6.7 AMOLED 1.5K 120Hz",
    carregamento: "66W"
  },

  {
    id: "oppo-reno-11",
    nome: "OPPO Reno 11",
    marca: "OPPO",
    categoria: "Celular",
    preco: 2499,
    ram: "12 GB",
    armazenamento: "256 GB",
    processador: "Dimensity 7050",
    desempenho: 78,
    jogos: 75,
    qualidade: 91,
    camera: "50 MP OIS + 32 MP telefoto + 8 MP ultrawide / frontal 32 MP",
    bateria: "5000 mAh",
    tela: "6.7 AMOLED 120Hz",
    carregamento: "67W"
  },

  {
    id: "nothing-phone-2",
    nome: "Nothing Phone (2)",
    marca: "Nothing",
    categoria: "Celular",
    preco: 2999,
    ram: "12 GB",
    armazenamento: "256 GB",
    processador: "Snapdragon 8+ Gen 1",
    desempenho: 87,
    jogos: 88,
    qualidade: 91,
    camera: "50 MP OIS + 50 MP ultrawide / frontal 32 MP",
    bateria: "4700 mAh",
    tela: "6.7 LTPO OLED 120Hz",
    carregamento: "45W"
  }

];


// ======================================================
// PCS / NOTEBOOKS
// ======================================================

const pcs = [

  {
    id: "pc-r5-4600g",
    nome: "PC Gamer Ryzen 5 4600G",
    marca: "AMD",
    categoria: "PC Gamer",
    preco: 1899,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Ryzen 5 4600G",
    video: "Radeon Vega 7 integrada",
    desempenho: 72,
    jogos: 70,
    qualidade: 78
  },

  {
    id: "pc-r5-5600g",
    nome: "PC Gamer Ryzen 5 5600G",
    marca: "AMD",
    categoria: "PC Gamer",
    preco: 2299,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Ryzen 5 5600G",
    video: "Radeon Vega 7 integrada",
    desempenho: 80,
    jogos: 78,
    qualidade: 84
  },

  {
    id: "pc-r5-5600-rx6600",
    nome: "PC Gamer Ryzen 5 5600 + RX 6600",
    marca: "AMD",
    categoria: "PC Gamer",
    preco: 2999,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Ryzen 5 5600",
    video: "Radeon RX 6600 8 GB",
    desempenho: 89,
    jogos: 91,
    qualidade: 88
  },

  {
    id: "pc-r5-5600-rtx4060",
    nome: "PC Gamer Ryzen 5 5600 + RTX 4060",
    marca: "NVIDIA",
    categoria: "PC Gamer",
    preco: 3699,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Ryzen 5 5600",
    video: "GeForce RTX 4060 8 GB",
    desempenho: 93,
    jogos: 95,
    qualidade: 92
  },

  {
    id: "pc-r7-5700x-rtx4060",
    nome: "PC Gamer Ryzen 7 5700X + RTX 4060",
    marca: "AMD",
    categoria: "PC Gamer",
    preco: 4299,
    ram: "32 GB DDR4",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Ryzen 7 5700X",
    video: "GeForce RTX 4060 8 GB",
    desempenho: 95,
    jogos: 96,
    qualidade: 94
  },

  {
    id: "pc-i5-12400f-rtx4060",
    nome: "PC Gamer Core i5-12400F + RTX 4060",
    marca: "Intel",
    categoria: "PC Gamer",
    preco: 3999,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Intel Core i5-12400F",
    video: "GeForce RTX 4060 8 GB",
    desempenho: 94,
    jogos: 95,
    qualidade: 93
  },

  {
    id: "pc-i5-13400f-rtx4060ti",
    nome: "PC Gamer Core i5-13400F + RTX 4060 Ti",
    marca: "Intel",
    categoria: "PC Gamer",
    preco: 4999,
    ram: "32 GB DDR4",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Intel Core i5-13400F",
    video: "GeForce RTX 4060 Ti 8 GB",
    desempenho: 97,
    jogos: 98,
    qualidade: 96
  },

  {
    id: "pc-r7-7700x-4070",
    nome: "PC Gamer Ryzen 7 7700X + RTX 4070",
    marca: "AMD",
    categoria: "PC Gamer",
    preco: 6999,
    ram: "32 GB DDR5",
    armazenamento: "SSD NVMe 1 TB",
    processador: "Ryzen 7 7700X",
    video: "GeForce RTX 4070 12 GB",
    desempenho: 99,
    jogos: 99,
    qualidade: 98
  },

  {
    id: "pc-loq-i5",
    nome: "Lenovo LOQ Gaming",
    marca: "Lenovo",
    categoria: "Notebook Gamer",
    preco: 3499,
    ram: "16 GB",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Intel Core i5",
    video: "GeForce RTX 3050",
    desempenho: 86,
    jogos: 85,
    qualidade: 89
  },

  {
    id: "asus-tuf-a15",
    nome: "ASUS TUF Gaming A15",
    marca: "ASUS",
    categoria: "Notebook Gamer",
    preco: 4299,
    ram: "16 GB",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Ryzen 7",
    video: "GeForce RTX 4050",
    desempenho: 91,
    jogos: 93,
    qualidade: 94
  },

  {
    id: "acer-nitro-v",
    nome: "Acer Nitro V",
    marca: "Acer",
    categoria: "Notebook Gamer",
    preco: 3999,
    ram: "16 GB",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Intel Core i5",
    video: "GeForce RTX 4050",
    desempenho: 90,
    jogos: 92,
    qualidade: 90
  },

  {
    id: "ideapad-3",
    nome: "Lenovo IdeaPad 3",
    marca: "Lenovo",
    categoria: "Notebook",
    preco: 2499,
    ram: "8 GB",
    armazenamento: "SSD 512 GB",
    processador: "Ryzen 5",
    video: "Radeon integrada",
    desempenho: 70,
    jogos: 55,
    qualidade: 80
  },

  {
    id: "vivobook-15",
    nome: "ASUS Vivobook 15",
    marca: "ASUS",
    categoria: "Notebook",
    preco: 2799,
    ram: "16 GB",
    armazenamento: "SSD 512 GB",
    processador: "Intel Core i5",
    video: "Intel integrada",
    desempenho: 74,
    jogos: 60,
    qualidade: 84
  },

  {
    id: "macbook-air-m2",
    nome: "MacBook Air M2",
    marca: "Apple",
    categoria: "Notebook",
    preco: 6999,
    ram: "8 GB",
    armazenamento: "SSD 256 GB",
    processador: "Apple M2",
    video: "GPU integrada 8-core",
    desempenho: 91,
    jogos: 72,
    qualidade: 96
  },

  {
    id: "macbook-air-m3",
    nome: "MacBook Air M3",
    marca: "Apple",
    categoria: "Notebook",
    preco: 7999,
    ram: "8 GB",
    armazenamento: "SSD 256 GB",
    processador: "Apple M3",
    video: "GPU integrada 8-core",
    desempenho: 94,
    jogos: 76,
    qualidade: 98
  },

  {
    id: "pc-i3-12100f-rx580",
    nome: "PC Gamer Core i3-12100F + RX 580",
    marca: "Intel",
    categoria: "PC Gamer",
    preco: 2299,
    ram: "16 GB DDR4",
    armazenamento: "SSD NVMe 512 GB",
    processador: "Intel Core i3-12100F",
    video: "Radeon RX 580 8 GB",
    desempenho: 77,
    jogos: 79,
    qualidade: 78
  }

];


// ======================================================
// LISTAS AUXILIARES
// ======================================================

const todosProdutos = [
  ...celulares,
  ...pcs
];

const marcasCelulares = [
  ...new Set(
    celulares.map(
      item => item.marca
    )
  )
].sort();

const marcasPCs = [
  ...new Set(
    pcs.map(
      item => item.marca
    )
  )
].sort();


// Compatibilidade com páginas antigas
const celularesData = celulares;
const pcsData = pcs;


// Disponibiliza globalmente
window.celulares = celulares;
window.pcs = pcs;
window.todosProdutos = todosProdutos;
window.marcasCelulares = marcasCelulares;
window.marcasPCs = marcasPCs;
window.celularesData = celularesData;
window.pcsData = pcsData;
