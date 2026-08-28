# CelularRank-Official
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CelularRank-Official</title>

    <meta
        name="description"
        content="Compare celulares, PCs e notebooks por desempenho, jogos, custo-benefício e preço."
    >

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- ==============================
         CABEÇALHO
    =============================== -->

    <header class="header">

        <div class="logo">
            <span>Celular</span>Rank
        </div>

        <nav>
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#como-funciona">Como funciona</a>
        </nav>

    </header>


    <!-- ==============================
         INÍCIO
    =============================== -->

    <main id="inicio">

        <section class="hero">

            <div class="hero-content">

                <div class="badge">
                    🚀 Compare antes de comprar
                </div>

                <h1>
                    Encontre o produto
                    <span>ideal para você</span>
                </h1>

                <p>
                    Compare celulares, PCs e notebooks por desempenho,
                    jogos, custo-benefício e preço.
                </p>


                <!-- PESQUISA -->

                <div class="search-box">

                    <input
                        type="text"
                        id="searchInput"
                        placeholder="🔎 Pesquise um celular, PC ou notebook..."
                        autocomplete="off"
                    >

                    <button onclick="pesquisar()">
                        Pesquisar
                    </button>

                </div>


                <!-- CATEGORIAS -->

                <div class="categories">

                    <button onclick="filtrarCategoria('celular')">
                        📱 Celulares
                    </button>

                    <button onclick="filtrarCategoria('pc')">
                        🖥️ PCs
                    </button>

                    <button onclick="filtrarCategoria('notebook')">
                        💻 Notebooks
                    </button>

                </div>

            </div>

        </section>


        <!-- ==============================
             RESULTADOS
        =============================== -->

        <section id="produtos" class="products-section">

            <div class="section-title">

                <span>🔎 PESQUISA</span>

                <h2>
                    Encontre seu próximo dispositivo
                </h2>

                <p>
                    Pesquise pelo nome do produto para ver sua avaliação.
                </p>

            </div>


            <div id="resultados" class="products-grid">

                <!-- Produtos aparecem aqui pelo JavaScript -->

            </div>

        </section>


        <!-- ==============================
             COMO FUNCIONA
        =============================== -->

        <section id="como-funciona" class="how-section">

            <div class="section-title">

                <span>📊 COMO FUNCIONA</span>

                <h2>
                    Avaliamos o que realmente importa
                </h2>

            </div>


            <div class="features">

                <div class="feature">

                    <div class="feature-icon">
                        ⚡
                    </div>

                    <h3>Desempenho</h3>

                    <p>
                        Avaliação baseada no hardware e desempenho
                        geral do dispositivo.
                    </p>

                </div>


                <div class="feature">

                    <div class="feature-icon">
                        🎮
                    </div>

                    <h3>Jogos</h3>

                    <p>
                        Veja como o aparelho ou computador se
                        comporta em diferentes níveis de jogos.
                    </p>

                </div>


                <div class="feature">

                    <div class="feature-icon">
                        💰
                    </div>

                    <h3>Custo-benefício</h3>

                    <p>
                        Descubra se o desempenho compensa o preço
                        do produto.
                    </p>

                </div>


                <div class="feature">

                    <div class="feature-icon">
                        🛒
                    </div>

                    <h3>Onde comprar</h3>

                    <p>
                        Encontre links para lojas onde o produto
                        pode ser comprado.
                    </p>

                </div>

            </div>

        </section>

    </main>


    <!-- ==============================
         RODAPÉ
    =============================== -->

    <footer>

        <div class="logo">
            <span>Celular</span>Rank
        </div>

        <p>
            Compare. Avalie. Escolha melhor.
        </p>

        <small>
            © 2026 CelularRank-Official
        </small>

    </footer>


    <script src="js/app.js"></script>

</body>
</html>
