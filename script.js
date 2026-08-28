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
======================================== */

mostrarProdutos(produtos);
