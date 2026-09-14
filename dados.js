/* =========================================================
   📱 CELULARES
   CELULARRANK-OFFICIAL

   Informações:
   - câmera
   - bateria
   - tela
   - carregamento
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

        camera: "50 MP + 5 MP + 2 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" Super AMOLED • 90 Hz",
        carregamento: "25 W",

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

        camera: "50 MP OIS + 8 MP + 2 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" Super AMOLED • 120 Hz",
        carregamento: "25 W",

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

        camera: "50 MP OIS + 8 MP + 5 MP / frontal 13 MP",
        bateria: "5.000 mAh",
        tela: "6,6\" Super AMOLED • 120 Hz",
        carregamento: "25 W",

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

        camera: "50 MP OIS + 12 MP + 5 MP / frontal 32 MP",
        bateria: "5.000 mAh",
        tela: "6,6\" Super AMOLED • 120 Hz",
        carregamento: "25 W",

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

        camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.900 mAh",
        tela: "6,1\" Dynamic AMOLED 2X • 120 Hz",
        carregamento: "25 W",

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

        camera: "50 MP + 10 MP telefoto + 12 MP ultrawide / frontal 12 MP",
        bateria: "4.000 mAh",
        tela: "6,2\" Dynamic AMOLED 2X • 120 Hz",
        carregamento: "25 W",

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

        camera: "200 MP + 50 MP + 10 MP + 12 MP / frontal 12 MP",
        bateria: "5.000 mAh",
        tela: "6,8\" Dynamic AMOLED 2X • QHD+ • 120 Hz",
        carregamento: "45 W",

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

        camera: "12 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.227 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W",

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

        camera: "12 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.279 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W",

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

        camera: "48 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.349 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W",

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

        camera: "48 MP + 12 MP ultrawide + 12 MP telefoto 3x / frontal 12 MP",
        bateria: "3.274 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • ProMotion 120 Hz",
        carregamento: "20 W",

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

        camera: "48 MP + 12 MP ultrawide / frontal 12 MP",
        bateria: "3.561 mAh (aprox.)",
        tela: "6,1\" Super Retina XDR OLED • 60 Hz",
        carregamento: "20 W",

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

        camera: "108 MP + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "33 W",

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

        camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.100 mAh",
        tela: "6,67\" AMOLED 1,5K • 120 Hz",
        carregamento: "67 W",

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

        camera: "200 MP OIS + 8 MP + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED 1,5K • 120 Hz",
        carregamento: "120 W",

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

        camera: "50 MP + 50 MP telefoto + 50 MP ultrawide / frontal 32 MP",
        bateria: "4.610 mAh",
        tela: "6,36\" LTPO AMOLED • 120 Hz",
        carregamento: "90 W",

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

        camera: "50 MP OIS + 2 MP / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,5\" IPS LCD • 120 Hz",
        carregamento: "20 W",

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

        camera: "50 MP OIS + 8 MP ultrawide/macro / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,55\" pOLED • 120 Hz",
        carregamento: "30 W",

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

        camera: "50 MP OIS + 13 MP ultrawide/macro / frontal 32 MP",
        bateria: "4.400 mAh",
        tela: "6,55\" pOLED • 144 Hz",
        carregamento: "68 W",

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

        camera: "50 MP OIS + 13 MP ultrawide/macro + 10 MP telefoto 3x / frontal 50 MP",
        bateria: "4.500 mAh",
        tela: "6,7\" pOLED • 144 Hz",
        carregamento: "125 W",

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

        camera: "108 MP + 2 MP / frontal 8 MP",
        bateria: "5.000 mAh",
        tela: "6,72\" IPS LCD • 90 Hz",
        carregamento: "33 W",

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

        camera: "50 MP OIS + 32 MP telefoto 2x + 8 MP ultrawide / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" OLED • 120 Hz",
        carregamento: "67 W",

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

        camera: "50 MP OIS + 50 MP telefoto + 8 MP ultrawide / frontal 32 MP",
        bateria: "5.500 mAh",
        tela: "6,78\" LTPO AMOLED • 120 Hz",
        carregamento: "120 W",

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

        camera: "50 MP OIS/Gimbal + 13 MP ultrawide / frontal 32 MP",
        bateria: "4.300 mAh",
        tela: "5,9\" AMOLED • até 144 Hz",
        carregamento: "30 W",

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

        camera: "50 MP OIS + 13 MP ultrawide + 32 MP telefoto 3x / frontal 32 MP",
        bateria: "5.500 mAh",
        tela: "6,78\" Samsung Flexible AMOLED • até 165 Hz",
        carregamento: "65 W",

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

        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP",
        bateria: "5.100 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "67 W",

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

        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / frontal 16 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" Flow AMOLED • 120 Hz",
        carregamento: "67 W",

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

        camera: "50 MP OIS + 8 MP ultrawide / frontal 20 MP",
        bateria: "5.000 mAh",
        tela: "6,67\" AMOLED • 120 Hz",
        carregamento: "90 W",

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

        camera: "50 MP OIS + 12 MP ultrawide / frontal 10,5 MP",
        bateria: "4.575 mAh",
        tela: "6,2\" OLED Actua • 120 Hz",
        carregamento: "27 W",

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

        camera: "50 MP + 48 MP ultrawide + 48 MP telefoto 5x / frontal 10,5 MP",
        bateria: "5.050 mAh",
        tela: "6,7\" LTPO OLED • 120 Hz",
        carregamento: "30 W",

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

        camera: "50 MP OIS + 64 MP telefoto 3x + 48 MP ultrawide / frontal 32 MP",
        bateria: "5.400 mAh",
        tela: "6,82\" LTPO AMOLED • 120 Hz",
        carregamento: "100 W",

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

        camera: "200 MP + 12 MP ultrawide/macro + 2 MP profundidade / frontal 50 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" AMOLED 1,5K • 120 Hz",
        carregamento: "66 W",

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

        camera: "50 MP OIS + 32 MP telefoto + 8 MP ultrawide / frontal 32 MP",
        bateria: "5.000 mAh",
        tela: "6,7\" AMOLED curva • 120 Hz",
        carregamento: "67 W",

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

        camera: "50 MP OIS + 50 MP ultrawide / frontal 32 MP",
        bateria: "4.700 mAh",
        tela: "6,7\" LTPO OLED • 120 Hz",
        carregamento: "45 W",

        desempenho: 93,
        jogos: 91,
        qualidade: 94
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

console.log(
    "===================================="
);
