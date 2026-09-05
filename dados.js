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
        qualidade: 88
    },

    {
        id: "samsung-a35-5g",
        nome: "Galaxy A35 5G",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2299,
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
        preco: 2499,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 1480",
        desempenho: 92,
        jogos: 90,
        qualidade: 94
    },

    {
        id: "samsung-s23",
        nome: "Galaxy S23",
        marca: "Samsung",
        categoria: "Celular",
        preco: 2999,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 2",
        desempenho: 96,
        jogos: 96,
        qualidade: 96
    },

    {
        id: "samsung-s24",
        nome: "Galaxy S24",
        marca: "Samsung",
        categoria: "Celular",
        preco: 3999,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Exynos 2400",
        desempenho: 97,
        jogos: 96,
        qualidade: 97
    },

    {
        id: "samsung-s24-ultra",
        nome: "Galaxy S24 Ultra",
        marca: "Samsung",
        categoria: "Celular",
        preco: 6999,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 100,
        jogos: 100,
        qualidade: 100
    },

    {
        id: "iphone-13",
        nome: "iPhone 13",
        marca: "Apple",
        categoria: "Celular",
        preco: 2999,
        ram: "4 GB",
        armazenamento: "128 GB",
        processador: "A15 Bionic",
        desempenho: 94,
        jogos: 94,
        qualidade: 95
    },

    {
        id: "iphone-14",
        nome: "iPhone 14",
        marca: "Apple",
        categoria: "Celular",
        preco: 3499,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "A15 Bionic",
        desempenho: 95,
        jogos: 95,
        qualidade: 96
    },

    {
        id: "iphone-15",
        nome: "iPhone 15",
        marca: "Apple",
        categoria: "Celular",
        preco: 3999,
        ram: "6 GB",
        armazenamento: "128 GB",
        processador: "A16 Bionic",
        desempenho: 97,
        jogos: 97,
        qualidade: 97
    },

    {
        id: "iphone-15-pro",
        nome: "iPhone 15 Pro",
        marca: "Apple",
        categoria: "Celular",
        preco: 4999,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "A17 Pro",
        desempenho: 99,
        jogos: 99,
        qualidade: 98
    },

    {
        id: "iphone-16",
        nome: "iPhone 16",
        marca: "Apple",
        categoria: "Celular",
        preco: 4999,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "A18",
        desempenho: 99,
        jogos: 99,
        qualidade: 98
    },

    {
        id: "redmi-note-13",
        nome: "Redmi Note 13",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1399,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 685",
        desempenho: 80,
        jogos: 76,
        qualidade: 83
    },

    {
        id: "redmi-note-13-pro",
        nome: "Redmi Note 13 Pro",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 1999,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Helio G99 Ultra",
        desempenho: 85,
        jogos: 83,
        qualidade: 89
    },

    {
        id: "redmi-note-13-pro-plus",
        nome: "Redmi Note 13 Pro+",
        marca: "Xiaomi",
        categoria: "Celular",
        preco: 2399,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Dimensity 7200 Ultra",
        desempenho: 93,
        jogos: 91,
        qualidade: 94
    },

    {
        id: "moto-g54",
        nome: "Moto G54",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1399,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7020",
        desempenho: 83,
        jogos: 80,
        qualidade: 84
    },

    {
        id: "moto-g84",
        nome: "Moto G84",
        marca: "Motorola",
        categoria: "Celular",
        preco: 1699,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 695",
        desempenho: 84,
        jogos: 81,
        qualidade: 88
    },

    {
        id: "motorola-edge-40",
        nome: "Motorola Edge 40",
        marca: "Motorola",
        categoria: "Celular",
        preco: 2499,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 8020",
        desempenho: 91,
        jogos: 89,
        qualidade: 92
    },

    {
        id: "motorola-edge-50-pro",
        nome: "Motorola Edge 50 Pro",
        marca: "Motorola",
        categoria: "Celular",
        preco: 3499,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7 Gen 3",
        desempenho: 94,
        jogos: 91,
        qualidade: 96
    },

    {
        id: "realme-12-pro",
        nome: "Realme 12 Pro",
        marca: "Realme",
        categoria: "Celular",
        preco: 2499,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 6 Gen 1",
        desempenho: 87,
        jogos: 84,
        qualidade: 91
    },

    {
        id: "realme-gt-neo-5",
        nome: "Realme GT Neo 5",
        marca: "Realme",
        categoria: "Celular",
        preco: 3299,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8+ Gen 1",
        desempenho: 96,
        jogos: 97,
        qualidade: 94
    },

    {
        id: "asus-zenfone-10",
        nome: "Zenfone 10",
        marca: "ASUS",
        categoria: "Celular",
        preco: 3999,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 2",
        desempenho: 97,
        jogos: 97,
        qualidade: 95
    },

    {
        id: "asus-rog-phone-8",
        nome: "ROG Phone 8",
        marca: "ASUS",
        categoria: "Celular",
        preco: 5999,
        ram: "16 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 100,
        jogos: 100,
        qualidade: 98
    },

    {
        id: "poco-x6",
        nome: "POCO X6",
        marca: "POCO",
        categoria: "Celular",
        preco: 1899,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 7s Gen 2",
        desempenho: 91,
        jogos: 90,
        qualidade: 89
    },

    {
        id: "poco-x6-pro",
        nome: "POCO X6 Pro",
        marca: "POCO",
        categoria: "Celular",
        preco: 2299,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Dimensity 8300 Ultra",
        desempenho: 98,
        jogos: 99,
        qualidade: 93
    },

    {
        id: "google-pixel-8",
        nome: "Pixel 8",
        marca: "Google",
        categoria: "Celular",
        preco: 3999,
        ram: "8 GB",
        armazenamento: "128 GB",
        processador: "Google Tensor G3",
        desempenho: 94,
        jogos: 89,
        qualidade: 98
    },

    {
        id: "google-pixel-8-pro",
        nome: "Pixel 8 Pro",
        marca: "Google",
        categoria: "Celular",
        preco: 4999,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Google Tensor G3",
        desempenho: 96,
        jogos: 92,
        qualidade: 100
    },

    {
        id: "oneplus-12",
        nome: "OnePlus 12",
        marca: "OnePlus",
        categoria: "Celular",
        preco: 4999,
        ram: "12 GB",
        armazenamento: "256 GB",
        processador: "Snapdragon 8 Gen 3",
        desempenho: 100,
        jogos: 100,
        qualidade: 98
    },

    {
        id: "honor-90",
        nome: "Honor 90",
        marca: "Honor",
        categoria: "Celular",
        preco: 2499,
        ram: "12 GB",
        armazenamento: "512 GB",
        processador: "Snapdragon 7 Gen 1 Accelerated Edition",
        desempenho: 89,
        jogos: 85,
        qualidade: 94
    },

    {
        id: "oppo-reno-11",
        nome: "OPPO Reno 11",
        marca: "OPPO",
        categoria: "Celular",
        preco: 2499,
        ram: "8 GB",
        armazenamento: "256 GB",
        processador: "Dimensity 7050",
        desempenho: 87,
        jogos: 84,
        qualidade: 92
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
        desempenho: 95,
        jogos: 94,
        qualidade: 95
    }

];


/* =========================================================
   💻 PCS E NOTEBOOKS
========================================================= */

const pcs = [

    {
        id: "lenovo-ideapad-3",
        nome: "Lenovo IdeaPad 3",
        marca: "Lenovo",
        categoria: "Notebook",
        preco: 2899,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Ryzen 5 5500U",
        video: "Radeon Graphics",
        desempenho: 78,
        jogos: 65,
        trabalho: 86,
        qualidade: 85
    },

    {
        id: "lenovo-loq",
        nome: "Lenovo LOQ",
        marca: "Lenovo",
        categoria: "Notebook Gamer",
        preco: 4999,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5-12450H",
        video: "RTX 3050",
        desempenho: 91,
        jogos: 92,
        trabalho: 88,
        qualidade: 93
    },

    {
        id: "asus-vivobook",
        nome: "ASUS Vivobook",
        marca: "ASUS",
        categoria: "Notebook",
        preco: 2999,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Intel UHD",
        desempenho: 79,
        jogos: 62,
        trabalho: 88,
        qualidade: 87
    },

    {
        id: "asus-tuf-gaming",
        nome: "ASUS TUF Gaming",
        marca: "ASUS",
        categoria: "Notebook Gamer",
        preco: 5499,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Ryzen 7",
        video: "RTX 4050",
        desempenho: 94,
        jogos: 95,
        trabalho: 91,
        qualidade: 94
    },

    {
        id: "acer-aspire-5",
        nome: "Acer Aspire 5",
        marca: "Acer",
        categoria: "Notebook",
        preco: 2799,
        ram: "8 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "Intel Iris Xe",
        desempenho: 81,
        jogos: 68,
        trabalho: 90,
        qualidade: 89
    },

    {
        id: "acer-nitro-v",
        nome: "Acer Nitro V",
        marca: "Acer",
        categoria: "Notebook Gamer",
        preco: 4599,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5-13420H",
        video: "RTX 4050",
        desempenho: 93,
        jogos: 94,
        trabalho: 89,
        qualidade: 92
    },

    {
        id: "dell-inspiron",
        nome: "Dell Inspiron",
        marca: "Dell",
        categoria: "Notebook",
        preco: 3199,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i5",
        video: "Intel Iris Xe",
        desempenho: 82,
        jogos: 65,
        trabalho: 91,
        qualidade: 91
    },

    {
        id: "hp-250",
        nome: "HP 250",
        marca: "HP",
        categoria: "Notebook",
        preco: 2499,
        ram: "8 GB",
        armazenamento: "256 GB SSD",
        processador: "Core i3",
        video: "Intel UHD",
        desempenho: 68,
        jogos: 52,
        trabalho: 82,
        qualidade: 83
    },

    {
        id: "pc-ryzen-5-5600g",
        nome: "PC Gamer Ryzen 5 5600G",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 2499,
        ram: "16 GB",
        armazenamento: "480 GB SSD",
        processador: "Ryzen 5 5600G",
        video: "Radeon Vega 7",
        desempenho: 86,
        jogos: 78,
        trabalho: 89,
        qualidade: 88
    },

    {
        id: "pc-ryzen-5-5600",
        nome: "PC Gamer Ryzen 5 5600",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 3199,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Ryzen 5 5600",
        video: "RX 6600",
        desempenho: 92,
        jogos: 94,
        trabalho: 91,
        qualidade: 92
    },

    {
        id: "pc-ryzen-7-5700x",
        nome: "PC Gamer Ryzen 7 5700X",
        marca: "AMD",
        categoria: "PC Gamer",
        preco: 3999,
        ram: "32 GB",
        armazenamento: "1 TB SSD",
        processador: "Ryzen 7 5700X",
        video: "RTX 4060",
        desempenho: 96,
        jogos: 97,
        trabalho: 97,
        qualidade: 95
    },

    {
        id: "pc-core-i3",
        nome: "PC Core i3",
        marca: "Intel",
        categoria: "PC",
        preco: 1899,
        ram: "8 GB",
        armazenamento: "240 GB SSD",
        processador: "Core i3",
        video: "Intel UHD",
        desempenho: 65,
        jogos: 48,
        trabalho: 78,
        qualidade: 80
    },

    {
        id: "pc-gamer-core-i5",
        nome: "PC Gamer Core i5",
        marca: "Intel",
        categoria: "PC Gamer",
        preco: 3299,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "RTX 3060",
        desempenho: 91,
        jogos: 93,
        trabalho: 89,
        qualidade: 91
    },

    {
        id: "pc-gamer-core-i7",
        nome: "PC Gamer Core i7",
        marca: "Intel",
        categoria: "PC Gamer",
        preco: 4499,
        ram: "32 GB",
        armazenamento: "1 TB SSD",
        processador: "Core i7",
        video: "RTX 4070",
        desempenho: 98,
        jogos: 99,
        trabalho: 98,
        qualidade: 97
    },

    {
        id: "msi-katana",
        nome: "MSI Katana",
        marca: "MSI",
        categoria: "Notebook Gamer",
        preco: 5999,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i7",
        video: "RTX 4060",
        desempenho: 96,
        jogos: 98,
        trabalho: 92,
        qualidade: 94
    },

    {
        id: "gigabyte-g5",
        nome: "Gigabyte G5",
        marca: "Gigabyte",
        categoria: "Notebook Gamer",
        preco: 4999,
        ram: "16 GB",
        armazenamento: "512 GB SSD",
        processador: "Core i5",
        video: "RTX 4060",
        desempenho: 94,
        jogos: 97,
        trabalho: 89,
        qualidade: 92
    }

];


/* =========================================================
   🔗 BANCO UNIFICADO
========================================================= */

const todosProdutos = [
    ...celulares,
    ...pcs
];


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
   🔎 PESQUISAR PRODUTOS
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
   🌐 COMPATIBILIDADE COM AS PÁGINAS
========================================================= */

window.celulares =
    celulares;

window.pcs =
    pcs;

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


/* =========================================================
   ✅ TESTE
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
    "Marcas de celulares:",
    marcasCelulares.length
);

console.log(
    "Marcas de PCs:",
    marcasPCs.length
);

console.log(
    "===================================="
);

console.log(
    "✅ dados.js carregado corretamente!"
);

console.log);
    "===================================="
