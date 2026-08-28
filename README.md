# CelularRank-Official
<!DOCTYPE html>
/* ========================================
   CELULARRANK-OFFICIAL
   TEMA AZUL
======================================== */

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #061326;
    color: #ffffff;
    line-height: 1.6;
}


/* ========================================
   HEADER
======================================== */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    width: 100%;
    padding: 18px 7%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(5, 18, 38, 0.95);
    border-bottom: 1px solid #12345d;

    backdrop-filter: blur(12px);
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.logo span {
    color: #1683ff;
}

nav {
    display: flex;
    gap: 28px;
}

nav a {
    color: #b9cbe2;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
}

nav a:hover {
    color: #1683ff;
}


/* ========================================
   HERO / INÍCIO
======================================== */

.hero {
    min-height: 680px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 90px 7%;

    text-align: center;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(0, 119, 255, 0.28),
            transparent 45%
        ),
        linear-gradient(
            180deg,
            #071a35 0%,
            #061326 100%
        );
}

.hero-content {
    width: 100%;
    max-width: 950px;
}


/* ========================================
   BADGE
======================================== */

.badge {
    display: inline-block;

    padding: 9px 17px;
    margin-bottom: 22px;

    border: 1px solid #155aa3;
    border-radius: 50px;

    background: rgba(16, 104, 190, 0.12);

    color: #53aaff;

    font-size: 14px;
    font-weight: 700;

    box-shadow: 0 0 25px rgba(0, 119, 255, 0.08);
}


/* ========================================
   TÍTULO
======================================== */

.hero h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;

    letter-spacing: -2px;

    margin-bottom: 25px;
}

.hero h1 span {
    display: block;

    color: #1683ff;

    text-shadow:
        0 0 30px rgba(22, 131, 255, 0.25);
}

.hero p {
    max-width: 700px;

    margin: 0 auto;

    color: #a9bdd5;

    font-size: 18px;
}


/* ========================================
   PESQUISA
======================================== */

.search-box {
    max-width: 800px;

    margin: 38px auto 20px;

    display: flex;
    align-items: center;

    padding: 7px;

    background: #0b203b;

    border: 1px solid #1b4e83;

    border-radius: 15px;

    box-shadow:
        0 15px 45px rgba(0, 0, 0, 0.25),
        0 0 30px rgba(0, 119, 255, 0.08);
}

.search-box:focus-within {
    border-color: #1683ff;

    box-shadow:
        0 0 0 3px rgba(22, 131, 255, 0.12),
        0 15px 45px rgba(0, 0, 0, 0.25);
}

.search-box input {
    flex: 1;

    min-width: 0;

    padding: 17px;

    border: none;
    outline: none;

    background: transparent;

    color: #ffffff;

    font-size: 16px;
}

.search-box input::placeholder {
    color: #7189a5;
}

.search-box button {
    padding: 15px 25px;

    border: none;
    border-radius: 11px;

    background: #1683ff;

    color: #ffffff;

    font-size: 15px;
    font-weight: 800;

    cursor: pointer;

    transition: 0.2s;

    box-shadow:
        0 8px 20px rgba(22, 131, 255, 0.22);
}

.search-box button:hover {
    background: #3194ff;

    transform: translateY(-2px);
}


/* ========================================
   CATEGORIAS
======================================== */

.categories {
    display: flex;

    justify-content: center;

    gap: 12px;

    flex-wrap: wrap;

    margin-top: 18px;
}

.categories button {
    padding: 12px 20px;

    border: 1px solid #1c4771;
    border-radius: 11px;

    background: #0b1e35;

    color: #c8d8eb;

    font-weight: 700;

    cursor: pointer;

    transition: 0.2s;
}

.categories button:hover {
    background: #0e3158;

    border-color: #1683ff;

    color: #ffffff;

    transform: translateY(-2px);
}


/* ========================================
   PRODUTOS
======================================== */

.products-section {
    padding: 95px 7%;

    background: #081a31;

    border-top: 1px solid #0d2a4b;
}

.section-title {
    text-align: center;

    margin-bottom: 48px;
}

.section-title span {
    color: #1683ff;

    font-size: 13px;

    font-weight: 800;

    letter-spacing: 1.5px;
}

.section-title h2 {
    margin: 8px 0;

    font-size: clamp(30px, 5vw, 42px);
}

.section-title p {
    color: #8fa8c4;
}


/* ========================================
   CARDS
======================================== */

.products-grid {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(280px, 1fr));

    gap: 22px;
}

.product-card {
    padding: 25px;

    background:
        linear-gradient(
            145deg,
            #0d2747,
            #0a1c32
        );

    border: 1px solid #19456f;

    border-radius: 18px;

    transition: 0.25s;
}

.product-card:hover {
    transform: translateY(-6px);

    border-color: #1683ff;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25),
        0 0 25px rgba(22, 131, 255, 0.08);
}

.product-type {
    color: #53aaff;

    font-size: 13px;

    font-weight: 800;
}

.product-card h3 {
    margin: 8px 0 20px;

    font-size: 22px;
}

.score {
    display: flex;

    justify-content: space-between;

    padding: 11px 0;

    border-bottom: 1px solid #183652;

    color: #a8bbd0;
}

.score strong {
    color: #ffffff;
}

.cost {
    margin-top: 18px;

    padding: 13px;

    border-radius: 11px;

    background: #092d49;

    border: 1px solid #14547e;

    color: #57c6ff;

    font-weight: 800;
}

.buy-button {
    width: 100%;

    margin-top: 18px;

    padding: 14px;

    border: none;

    border-radius: 11px;

    background: #1683ff;

    color: #ffffff;

    font-weight: 800;

    cursor: pointer;

    transition: 0.2s;
}

.buy-button:hover {
    background: #3194ff;

    transform: translateY(-2px);
}

.no-results {
    grid-column: 1 / -1;

    padding: 50px;

    text-align: center;

    color: #8fa8c4;
}


/* ========================================
   COMO FUNCIONA
======================================== */

.how-section {
    padding: 95px 7%;

    background: #061326;
}

.features {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 20px;
}

.feature {
    padding: 30px;

    text-align: center;

    background: #0a1d34;

    border: 1px solid #173b60;

    border-radius: 18px;

    transition: 0.2s;
}

.feature:hover {
    border-color: #1683ff;

    transform: translateY(-4px);
}

.feature-icon {
    width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin: 0 auto 17px;

    border-radius: 16px;

    background: #0c3158;

    font-size: 30px;
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #8fa8c4;
}


/* ========================================
   FOOTER
======================================== */

footer {
    padding: 55px 7%;

    text-align: center;

    background: #030b16;

    border-top: 1px solid #102b49;

    color: #7f95ad;
}

footer .logo {
    color: #ffffff;

    margin-bottom: 8px;
}

footer small {
    display: block;

    margin-top: 20px;

    color: #60758d;
}


/* ========================================
   RESPONSIVIDADE
======================================== */

@media (max-width: 700px) {

    .header {
        padding: 15px 5%;
    }

    nav {
        display: none;
    }

    .hero {
        min-height: 620px;

        padding: 65px 5%;
    }

    .hero h1 {
        font-size: 44px;

        letter-spacing: -1.5px;
    }

    .hero p {
        font-size: 16px;
    }

    .search-box {
        flex-direction: column;

        gap: 7px;

        padding: 7px;
    }

    .search-box input {
        width: 100%;

        padding: 15px;
    }

    .search-box button {
        width: 100%;
    }

    .products-section,
    .how-section {
        padding: 70px 5%;
    }

    .section-title h2 {
        font-size: 30px;
    }

    .categories button {
        flex: 1;

        min-width: 140px;
    }
}
/* ========================================
   BANCO DE PRODUTOS — TESTE
======================================== */

const produtos = [

    {
        nome: "Samsung Galaxy A15 5G",
        categoria: "celular",
        desempenho: 82,
        jogos: 78,
        bateria: 91,
        custo: 89,
        preco: "R$ 899,00",
        loja: "Mercado Livre"
    },

    {
        nome: "iPhone 15",
        categoria: "celular",
        desempenho: 94,
        jogos: 95,
        bateria: 86,
        custo: 81,
        preco: "R$ 3.999,00",
        loja: "Apple"
    },

    {
        nome: "PC Gamer Ryzen 5",
        categoria: "pc",
        desempenho: 91,
        jogos: 93,
        bateria: null,
        custo: 90,
        preco: "R$ 2.499,00",
        loja: "Mercado Livre"
    },

    {
        nome: "Notebook Gamer",
        categoria: "notebook",
        desempenho: 88,
        jogos: 90,
        bateria: 70,
        custo: 84,
        preco: "R$ 3.499,00",
        loja: "Amazon"
    }

];


/* ========================================
   ELEMENTOS
======================================== */

const resultados = document.getElementById("resultados");
const searchInput = document.getElementById("searchInput");


/* ========================================
   ÍCONE DA CATEGORIA
======================================== */

function getIcone(categoria) {

    if (categoria === "celular") {
        return "📱";
    }

    if (categoria === "pc") {
        return "🖥️";
    }

    if (categoria === "notebook") {
        return "💻";
    }

    return "📦";
}


/* ========================================
   MOSTRAR PRODUTOS
======================================== */

function mostrarProdutos(lista) {

    resultados.innerHTML = "";

    if (lista.length === 0) {

        resultados.innerHTML = `
            <div class="no-results">
                <h3>Nenhum produto encontrado 😕</h3>
                <p>
                    Tente pesquisar outro celular, PC ou notebook.
                </p>
            </div>
        `;

        return;
    }


    lista.forEach(produto => {

        resultados.innerHTML += `

            <article class="product-card">

                <div class="product-type">
                    ${getIcone(produto.categoria)}
                    ${produto.categoria.toUpperCase()}
                </div>

                <h3>
                    ${produto.nome}
                </h3>

                <div class="score">
                    <span>⚡ Desempenho</span>
                    <strong>${produto.desempenho}/100</strong>
                </div>

                <div class="score">
                    <span>🎮 Jogos</span>
                    <strong>${produto.jogos}/100</strong>
                </div>

                ${
                    produto.bateria !== null
                    ?
                    `
                    <div class="score">
                        <span>🔋 Bateria</span>
                        <strong>${produto.bateria}/100</strong>
                    </div>
                    `
                    :
                    ""
                }

                <div class="score">
                    <span>💰 Custo-benefício</span>
                    <strong>${produto.custo}/100</strong>
                </div>

                <div class="cost">
                    💵 ${produto.preco}
                </div>

                <button
                    class="buy-button"
                    onclick="abrirLoja('${produto.loja}')"
                >
                    🛒 Ver na ${produto.loja}
                </button>

            </article>

        `;

    });

}


/* ========================================
   PESQUISA
======================================== */

function pesquisar() {

    const termo = searchInput.value
        .toLowerCase()
        .trim();

    if (!termo) {

        mostrarProdutos(produtos);

        document
            .getElementById("produtos")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    const encontrados = produtos.filter(produto => {

        return produto.nome
            .toLowerCase()
            .includes(termo);

    });


    mostrarProdutos(encontrados);


    document
        .getElementById("produtos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ========================================
   FILTRAR CATEGORIA
======================================== */

function filtrarCategoria(categoria) {

    const encontrados = produtos.filter(
        produto => produto.categoria === categoria
    );

    mostrarProdutos(encontrados);


    document
        .getElementById("produtos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ========================================
   ENTER NA PESQUISA
======================================== */

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        pesquisar();
    }

});


/* ========================================
   ABRIR LOJA
======================================== */

function abrirLoja(loja) {

    alert(
        "O link da loja será colocado aqui: " + loja
    );

}


/* ========================================
   INICIALIZAÇÃO
======================================== 

mostrarProdutos(produtos);
/* ========================================
   RESET
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #07111f;
    color: #ffffff;
    line-height: 1.6;
}


/* ========================================
   HEADER
======================================== */

.header {
    width: 100%;
    padding: 18px 7%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #081525;
    border-bottom: 1px solid #14263d;

    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 24px;
    font-weight: 800;
}

.logo span {
    color: #1683ff;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: #b8c7d9;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
}

nav a:hover {
    color: #1683ff;
}


/* ========================================
   HERO
======================================== */

.hero {
    min-height: 650px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 80px 7%;

    background:
        radial-gradient(
            circle at top right,
            rgba(22, 131, 255, 0.18),
            transparent 35%
        ),
        #07111f;
}

.hero-content {
    width: 100%;
    max-width: 900px;
    text-align: center;
}

.badge {
    display: inline-block;

    padding: 8px 15px;
    margin-bottom: 20px;

    background: #0d2139;
    border: 1px solid #16436e;
    border-radius: 30px;

    color: #5faeff;
    font-size: 14px;
    font-weight: bold;
}

.hero h1 {
    font-size: clamp(40px, 7vw, 72px);
    line-height: 1.05;
    margin-bottom: 25px;
}

.hero h1 span {
    display: block;
    color: #1683ff;
}

.hero p {
    max-width: 650px;
    margin: auto;

    color: #aab9cb;
    font-size: 18px;
}


/* ========================================
   PESQUISA
======================================== */

.search-box {
    max-width: 750px;
    margin: 35px auto 20px;

    display: flex;

    background: #0d1c2e;
    border: 1px solid #24415f;

    border-radius: 14px;
    padding: 7px;
}

.search-box input {
    flex: 1;

    min-width: 0;

    border: none;
    outline: none;

    background: transparent;

    color: white;

    padding: 15px;

    font-size: 16px;
}

.search-box input::placeholder {
    color: #71859d;
}

.search-box button {
    border: none;
    border-radius: 10px;

    background: #1683ff;
    color: white;

    padding: 0 25px;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

.search-box button:hover {
    transform: translateY(-2px);
    background: #3194ff;
}


/* ========================================
   CATEGORIAS
======================================== */

.categories {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
}

.categories button {
    padding: 12px 18px;

    border-radius: 10px;

    border: 1px solid #23415f;

    background: #0d1c2e;

    color: #d9e6f5;

    cursor: pointer;

    font-weight: 600;

    transition: 0.2s;
}

.categories button:hover {
    border-color: #1683ff;
    color: #1683ff;
}


/* ========================================
   SEÇÕES
======================================== */

.products-section,
.how-section {
    padding: 90px 7%;
}

.products-section {
    background: #091727;
}

.section-title {
    text-align: center;
    margin-bottom: 45px;
}

.section-title span {
    color: #1683ff;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
}

.section-title h2 {
    font-size: 36px;
    margin: 8px 0;
}

.section-title p {
    color: #91a4b9;
}


/* ========================================
   PRODUTOS
======================================== */

.products-grid {
    max-width: 1200px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(280px, 1fr));

    gap: 20px;
}

.product-card {
    background: #0d1c2e;

    border: 1px solid #1b344e;

    border-radius: 18px;

    padding: 25px;

    transition: 0.25s;
}

.product-card:hover {
    transform: translateY(-5px);
    border-color: #1683ff;
}

.product-type {
    color: #5faeff;
    font-size: 13px;
    font-weight: bold;
}

.product-card h3 {
    margin: 8px 0 20px;
    font-size: 23px;
}

.score {
    display: flex;
    justify-content: space-between;

    padding: 10px 0;

    border-bottom: 1px solid #193047;

    color: #b9c8d8;
}

.score strong {
    color: white;
}

.cost {
    margin-top: 18px;

    padding: 12px;

    border-radius: 10px;

    background: #0a2632;

    color: #54d39a;

    font-weight: bold;
}

.buy-button {
    width: 100%;

    margin-top: 18px;

    padding: 13px;

    border: none;
    border-radius: 10px;

    background: #1683ff;

    color: white;

    font-weight: bold;

    cursor: pointer;
}

.buy-button:hover {
    background: #3194ff;
}

.no-results {
    text-align: center;
    grid-column: 1 / -1;

    color: #8ea2b8;

    padding: 40px;
}


/* ========================================
   COMO FUNCIONA
======================================== */

.features {
    max-width: 1200px;
    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 20px;
}

.feature {
    padding: 30px;

    background: #0d1c2e;

    border: 1px solid #1b344e;

    border-radius: 18px;

    text-align: center;
}

.feature-icon {
    font-size: 35px;
    margin-bottom: 15px;
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #91a4b9;
}


/* ========================================
   FOOTER
======================================== */

footer {
    padding: 50px 7%;

    text-align: center;

    background: #050d17;

    color: #8fa2b7;
}

footer .logo {
    color: white;
    margin-bottom: 8px;
}

footer small {
    display: block;
    margin-top: 20px;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 700px) {

    .header {
        padding: 15px 5%;
    }

    nav {
        display: none;
    }

    .hero {
        min-height: 600px;
        padding: 60px 5%;
    }

    .hero h1 {
        font-size: 43px;
    }

    .hero p {
        font-size: 16px;
    }

    .search-box {
        flex-direction: column;
        gap: 7px;
    }

    .search-box button {
        padding: 14px;
    }

    .products-section,
    .how-section {
        padding: 65px 5%;
    }

    .section-title h2 {
        font-size: 29px;
    }

  }
