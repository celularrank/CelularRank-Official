/* =========================================================
   CELULARRANK-OFFICIAL
   dados.js
   Catálogo de celulares, PCs e notebooks
========================================================= */

"use strict";

/* =========================================================
   📱 ESPECIFICAÇÕES COMPLETAS DOS CELULARES
========================================================= */

const especificacoesCelulares = {

    "samsung-a15-5g": {
        camera: "50 MP + 5 MP ultrawide + 2 MP macro / 13 MP frontal",
        bateria: "5000 mAh",
        tela: "6.5\" Super AMOLED 90Hz",
        carregamento: "25W"
    },

    "samsung-a25-5g": {
        camera: "50 MP OIS + 8 MP ultrawide + 2 MP macro / 13 MP frontal",
        bateria: "5000 mAh",
        tela: "6.5\" Super AMOLED 120Hz",
        carregamento: "25W"
    },

    "samsung-a35-5g": {
        camera: "50 MP OIS + 8 MP ultrawide + 5 MP macro / 13 MP frontal",
        bateria: "5000 mAh",
        tela: "6.6\" Super AMOLED 120Hz",
        carregamento: "25W"
    },

    "samsung-a55-5g": {
        camera: "50 MP OIS + 12 MP ultrawide + 5 MP macro / 32 MP frontal",
        bateria: "5000 mAh",
        tela: "6.6\" Super AMOLED 120Hz",
        carregamento: "25W"
    },

    "samsung-s23": {
        camera: "50 MP + 10 MP teleobjetiva + 12 MP ultrawide / 12 MP frontal",
        bateria: "3900 mAh",
        tela: "6.1\" Dynamic AMOLED 2X 120Hz",
        carregamento: "25W"
    },

    "samsung-s24": {
        camera: "50 MP + 10 MP teleobjetiva + 12 MP ultrawide / 12 MP frontal",
        bateria: "4000 mAh",
        tela: "6.2\" Dynamic AMOLED 2X 120Hz",
        carregamento: "25W"
    },

    "samsung-s24-ultra": {
        camera: "200 MP + 50 MP + 10 MP + 12 MP / 12 MP frontal",
        bateria: "5000 mAh",
        tela: "6.8\" Dynamic AMOLED 2X QHD+ 120Hz",
        carregamento: "45W"
    },

    "apple-iphone-13": {
        camera: "12 MP + 12 MP ultrawide / 12 MP frontal",
        bateria: "3227 mAh",
        tela: "6.1\" Super Retina XDR OLED 60Hz",
        carregamento: "20W"
    },

    "apple-iphone-14": {
        camera: "12 MP + 12 MP ultrawide / 12 MP frontal",
        bateria: "3279 mAh",
        tela: "6.1\" Super Retina XDR OLED 60Hz",
        carregamento: "20W"
    },

    "apple-iphone-15": {
        camera: "48 MP + 12 MP ultrawide / 12 MP frontal",
        bateria: "3349 mAh",
        tela: "6.1\" Super Retina XDR OLED 60Hz",
        carregamento: "20W"
    },

    "apple-iphone-15-pro": {
        camera: "48 MP + 12 MP ultrawide + 12 MP teleobjetiva 3x / 12 MP frontal",
        bateria: "3274 mAh",
        tela: "6.1\" Super Retina XDR OLED ProMotion 120Hz",
        carregamento: "20W"
    },

    "apple-iphone-16": {
        camera: "48 MP + 12 MP ultrawide / 12 MP frontal",
        bateria: "3561 mAh",
        tela: "6.1\" Super Retina XDR OLED 60Hz",
        carregamento: "20W"
    },

    "xiaomi-redmi-note-13": {
        camera: "108 MP + 8 MP ultrawide + 2 MP macro / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.67\" AMOLED 120Hz",
        carregamento: "33W"
    },

    "xiaomi-redmi-note-13-pro": {
        camera: "200 MP OIS + 8 MP ultrawide + 2 MP macro / 16 MP frontal",
        bateria: "5100 mAh",
        tela: "6.67\" AMOLED 1.5K 120Hz",
        carregamento: "67W"
    },

    "xiaomi-redmi-note-13-pro-plus": {
        camera: "200 MP OIS + 8 MP ultrawide + 2 MP macro / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.67\" AMOLED 1.5K 120Hz",
        carregamento: "120W"
    },

    "xiaomi-14": {
        camera: "50 MP + 50 MP teleobjetiva + 50 MP ultrawide / 32 MP frontal",
        bateria: "4610 mAh",
        tela: "6.36\" LTPO AMOLED 120Hz",
        carregamento: "120W"
    },

    "motorola-g54": {
        camera: "50 MP OIS + 2 MP / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.5\" IPS LCD 120Hz",
        carregamento: "20W"
    },

    "motorola-g84": {
        camera: "50 MP OIS + 8 MP ultrawide/macro / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.55\" pOLED 120Hz",
        carregamento: "30W"
    },

    "motorola-edge-40": {
        camera: "50 MP OIS + 13 MP ultrawide/macro / 32 MP frontal",
        bateria: "4400 mAh",
        tela: "6.55\" pOLED 144Hz",
        carregamento: "68W"
    },

    "motorola-edge-50-pro": {
        camera: "50 MP OIS + 13 MP ultrawide + 10 MP teleobjetiva 3x / 50 MP frontal",
        bateria: "4500 mAh",
        tela: "6.7\" pOLED 144Hz",
        carregamento: "125W"
    },

    "realme-c67": {
        camera: "108 MP + 2 MP / 8 MP frontal",
        bateria: "5000 mAh",
        tela: "6.72\" IPS LCD 90Hz",
        carregamento: "33W"
    },

    "realme-12-pro": {
        camera: "50 MP OIS + 32 MP teleobjetiva 2x + 8 MP ultrawide / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.7\" OLED 120Hz",
        carregamento: "67W"
    },

    "realme-gt-6": {
        camera: "50 MP OIS + 50 MP teleobjetiva + 8 MP ultrawide / 32 MP frontal",
        bateria: "5500 mAh",
        tela: "6.78\" LTPO AMOLED 120Hz",
        carregamento: "120W"
    },

    "asus-zenfone-10": {
        camera: "50 MP OIS/Gimbal + 13 MP ultrawide / 32 MP frontal",
        bateria: "4300 mAh",
        tela: "5.9\" AMOLED 144Hz",
        carregamento: "30W"
    },

    "asus-rog-phone-8": {
        camera: "50 MP OIS + 13 MP ultrawide + 32 MP teleobjetiva 3x / 32 MP frontal",
        bateria: "5500 mAh",
        tela: "6.78\" Samsung Flexible AMOLED 165Hz",
        carregamento: "65W"
    },

    "poco-x6": {
        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / 16 MP frontal",
        bateria: "5100 mAh",
        tela: "6.67\" AMOLED 120Hz",
        carregamento: "67W"
    },

    "poco-x6-pro": {
        camera: "64 MP OIS + 8 MP ultrawide + 2 MP macro / 16 MP frontal",
        bateria: "5000 mAh",
        tela: "6.67\" Flow AMOLED 120Hz",
        carregamento: "67W"
    },

    "poco-f6": {
        camera: "50 MP OIS + 8 MP ultrawide / 20 MP frontal",
        bateria: "5000 mAh",
        tela: "6.67\" AMOLED 120Hz",
        carregamento: "90W"
    },

    "google-pixel-8": {
        camera: "50 MP OIS + 12 MP ultrawide / 10.5 MP frontal",
        bateria: "4575 mAh",
        tela: "6.2\" OLED Actua 120Hz",
        carregamento: "27W"
    },

    "google-pixel-8-pro": {
        camera: "50 MP + 48 MP ultrawide + 48 MP teleobjetiva 5x / 10.5 MP frontal",
        bateria: "5050 mAh",
        tela: "6.7\" LTPO OLED 120Hz",
        carregamento: "30W"
    },

    "oneplus-12": {
        camera: "50 MP OIS + 64 MP teleobjetiva 3x + 48 MP ultrawide / 32 MP frontal",
        bateria: "5400 mAh",
        tela: "6.82\" LTPO AMOLED 120Hz",
        carregamento: "100W"
    },

    "honor-90": {
        camera: "200 MP + 12 MP ultrawide/macro + 2 MP profundidade / 50 MP frontal",
        bateria: "5000 mAh",
        tela: "6.7\" AMOLED 1.5K 120Hz",
        carregamento: "66W"
    },

    "oppo-reno-11": {
        camera: "50 MP OIS + 32 MP teleobjetiva + 8 MP ultrawide / 32 MP frontal",
        bateria: "5000 mAh",
        tela: "6.7\" AMOLED 120Hz",
        carregamento: "67W"
    },

    "nothing-phone-2": {
        camera: "50 MP OIS + 50 MP ultrawide / 32 MP frontal",
        bateria: "4700 mAh",
        tela: "6.7\" LTPO OLED 120Hz",
        carregamento: "45W"
    }
};


/* =========================================================
   💻 ESPECIFICAÇÕES COMPLETAS DOS PCS/NOTEBOOKS
========================================================= */

const especificacoesPCs = {

    "lenovo-ideapad-3": {
        placaMae: "Placa-mãe OEM Lenovo",
        fonte: "Fonte original Lenovo",
        gabinete: "Chassi Lenovo IdeaPad",
        refrigeracao: "Refrigeração original",
        tela: "15.6\" Full HD",
        bateria: "Bateria integrada",
        tipoTela: "Notebook"
    },

    "lenovo-loq": {
        placaMae: "Placa-mãe Lenovo LOQ",
        fonte: "Carregador original Lenovo",
        gabinete: "Chassi Lenovo LOQ",
        refrigeracao: "Sistema de refrigeração gamer",
        tela: "15.6\" Full HD 144Hz",
        bateria: "Bateria integrada",
        tipoTela: "Notebook Gamer"
    },

    "asus-vivobook": {
        placaMae: "Placa-mãe ASUS",
        fonte: "Carregador original ASUS",
        gabinete: "Chassi ASUS Vivobook",
        refrigeracao: "Refrigeração original",
        tela: "15.6\" Full HD",
        bateria: "Bateria integrada",
        tipoTela: "Notebook"
    },

    "asus-tuf-gaming": {
        placaMae: "Placa-mãe ASUS TUF",
        fonte: "Fonte/carregador ASUS",
        gabinete: "Chassi ASUS TUF Gaming",
        refrigeracao: "Refrigeração gamer",
        tela: "15.6\" Full HD 144Hz",
        bateria: "Bateria integrada",
        tipoTela: "Notebook Gamer"
    },

    "acer-aspire-5": {
        placaMae: "Placa-mãe OEM Acer",
        fonte: "Carregador original Acer",
        gabinete: "Chassi Acer Aspire",
        refrigeracao: "Refrigeração original",
        tela: "15.6\" Full HD",
        bateria: "Bateria integrada",
        tipoTela: "Notebook"
    },

    "acer-nitro-v": {
        placaMae: "Placa-mãe Acer Nitro",
        fonte: "Carregador original Acer",
        gabinete: "Chassi Acer Nitro",
        refrigeracao: "Refrigeração gamer",
        tela: "15.6\" Full HD 144Hz",
        bateria: "Bateria integrada",
        tipoTela: "Notebook Gamer"
    },

    "dell-inspiron": {
        placaMae: "Placa-mãe Dell OEM",
        fonte: "Carregador original Dell",
        gabinete: "Chassi Dell Inspiron",
        refrigeracao: "Refrigeração original",
        tela: "15.6\" Full HD",
        bateria: "Bateria integrada",
        tipoTela: "Notebook"
    },

    "hp-250": {
        placaMae: "Placa-mãe HP OEM",
        fonte: "Carregador original HP",
        gabinete: "Chassi HP 250",
        refrigeracao: "Refrigeração original",
        tela: "15.6\" Full HD",
        bateria: "Bateria integrada",
        tipoTela: "Notebook"
    },

    "pc-ryzen-5-5600g": {
        placaMae: "AM4 — A520/B450",
        fonte: "500W",
        gabinete: "Gabinete Gamer",
        refrigeracao: "Cooler box AMD",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop"
    },

    "pc-ryzen-5-5600": {
        placaMae: "AM4 — B550",
        fonte: "550W",
        gabinete: "Gabinete Gamer",
        refrigeracao: "Cooler torre",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop"
    },

    "pc-ryzen-7-5700x": {
        placaMae: "AM4 — B550",
        fonte: "650W",
        gabinete: "Gabinete Gamer",
        refrigeracao: "Cooler torre",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop"
    },

    "pc-core-i3": {
        placaMae: "H610",
        fonte: "450W",
        gabinete: "Gabinete ATX",
        refrigeracao: "Cooler box Intel",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop"
    },

    "pc-core-i5": {
        placaMae: "B660/B760",
        fonte: "550W",
        gabinete: "Gabinete Gamer",
        refrigeracao: "Cooler torre",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop Gamer"
    },

    "pc-core-i7": {
        placaMae: "B760",
        fonte: "650W",
        gabinete: "Gabinete Gamer",
        refrigeracao: "Cooler torre / water cooler",
        tela: "Não incluso",
        bateria: "Não possui",
        tipoTela: "Desktop Gamer"
    },

    "msi-katana": {
        placaMae: "Placa-mãe MSI OEM",
        fonte: "Carregador original MSI",
        gabinete: "Chassi MSI Katana",
        refrigeracao: "Cooler Boost MSI",
        tela: "15.6\" Full HD 144Hz",
        bateria: "Bateria integrada",
        tipoTela: "Notebook Gamer"
    },

    "gigabyte-g5": {
        placaMae: "Placa-mãe Gigabyte OEM",
        fonte: "Carregador original Gigabyte",
        gabinete: "Chassi Gigabyte G5",
        refrigeracao: "Refrigeração gamer",
        tela: "15.6\" Full HD 144Hz",
        bateria: "Bateria integrada",
        tipoTela: "Notebook Gamer"
    }
};


/* =========================================================
   🔄 APLICAR ESPECIFICAÇÕES AOS CELULARES
========================================================= */

celulares.forEach(celular => {

    const info =
        especificacoesCelulares[celular.id];

    if (!info) {
        return;
    }

    celular.camera =
        info.camera;

    celular.bateria =
        info.bateria;

    celular.tela =
        info.tela;

    celular.carregamento =
        info.carregamento;
});


/* =========================================================
   🔄 APLICAR ESPECIFICAÇÕES AOS PCS
========================================================= */

pcs.forEach(pc => {

    const info =
        especificacoesPCs[pc.id];

    if (!info) {
        return;
    }

    pc.placaMae =
        info.placaMae;

    pc.fonte =
        info.fonte;

    pc.gabinete =
        info.gabinete;

    pc.refrigeracao =
        info.refrigeracao;

    pc.tela =
        info.tela;

    pc.bateria =
        info.bateria;

    pc.tipoTela =
        info.tipoTela;
});

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
   📦 TODOS OS PRODUTOS
========================================================= */

const todosProdutos = [
    ...celulares,
    ...pcs
];


/* =========================================================
   🌐 COMPATIBILIDADE COM AS PÁGINAS
========================================================= */

window.celulares = celulares;
window.pcs = pcs;
window.todosProdutos = todosProdutos;

window.marcasCelulares =
    marcasCelulares;

window.marcasPCs =
    marcasPCs;


/* =========================================================
   💰 PREÇO
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

window.precoBRL = precoBRL;


/* =========================================================
   🏆 NOTA
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

window.calcularNota = calcularNota;


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

        const texto = [
            produto.nome,
            produto.marca,
            produto.processador,
            produto.categoria,
            produto.video,
            produto.ram,
            produto.armazenamento,
            produto.camera,
            produto.tela
        ]
        .map(
            valor =>
                String(valor || "")
                    .toLowerCase()
        )
        .join(" ");

        return texto.includes(busca);
    });
}

window.pesquisarProdutos =
    pesquisarProdutos;


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

window.ordenarPorRanking =
    ordenarPorRanking;


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
