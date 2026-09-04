<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>PCs | CelularRank-Official</title>

    <meta
        name="description"
        content="Compare PCs, computadores e notebooks por preço, desempenho, jogos, trabalho e qualidade."
    >

    <link rel="stylesheet" href="style.css">

    <style>

        /* ========================================
           💻 PÁGINA
        ======================================== */

        .pagina {
            min-height: 100vh;
            padding: 45px 20px 70px;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }


        /* ========================================
           ← VOLTAR
        ======================================== */

        .voltar {
            display: inline-block;
            margin-bottom: 25px;
            color: #58b7ff;
            text-decoration: none;
            font-weight: bold;
            transition: 0.2s ease;
        }

        .voltar:hover {
            color: white;
        }


        /* ========================================
           CABEÇALHO
        ======================================== */

        .pagina-topo {
            text-align: center;
            margin-bottom: 35px;
        }

        .pagina-topo h1 {
            font-size: clamp(34px, 6vw, 55px);
            margin: 15px 0 12px;
        }

        .pagina-topo h1 span {
            color: #35a9ff;
        }

        .pagina-topo p {
            color: #b9c7dd;
            line-height: 1.6;
            max-width: 680px;
            margin: 0 auto;
        }


        /* ========================================
           BADGE
        ======================================== */

        .badge {
            display: inline-block;
            padding: 10px 18px;
            border-radius: 30px;
            background: rgba(53, 169, 255, 0.12);
            border: 1px solid rgba(53, 169, 255, 0.25);
            color: #58b7ff;
            font-weight: bold;
        }


        /* ========================================
           CONTROLES
        ======================================== */

        .controles {
            display: grid;
            grid-template-columns: 1fr 230px;
            gap: 15px;
            margin-bottom: 30px;
        }

        .campo,
        .select {
            width: 100%;
            padding: 14px 16px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: #0b2552;
            color: white;
            outline: none;
            font-size: 15px;
            box-sizing: border-box;
        }

        .campo::placeholder {
            color: #8294b2;
        }

        .campo:focus,
        .select:focus {
            border-color: #35a9ff;
        }

        .select option {
            background: #0b2552;
            color: white;
        }


        /* ========================================
           INFORMAÇÕES
        ======================================== */

        .informacoes {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            color: #b9c7dd;
            font-size: 14px;
        }


        /* ========================================
           PRODUTOS
        ======================================== */

        .produtos {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }


        /* ========================================
           CARD
        ======================================== */

        .produto {
            background: #0b2552;
            border: 1px solid rgba(255, 255, 255, 0.10);
            border-radius: 20px;
            padding: 22px;
            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                box-shadow 0.25s ease;
        }

        .produto:hover {
            transform: translateY(-5px);
            border-color: #35a9ff;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
        }


        /* ========================================
           MARCA
        ======================================== */

        .marca {
            display: inline-block;
            padding: 6px 10px;
            background: rgba(53, 169, 255, 0.12);
            color: #58b7ff;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 12px;
        }


        /* ========================================
           NOME
        ======================================== */

        .produto h2 {
            font-size: 21px;
            margin: 0 0 10px;
        }


        /* ========================================
           PREÇO
        ======================================== */

        .preco {
            font-size: 27px;
            font-weight: bold;
            color: white;
            margin-bottom: 18px;
        }


        /* ========================================
           NOTA
        ======================================== */

        .nota {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #123a78;
            color: white;
            padding: 7px 10px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 18px;
        }


        /* ========================================
           ESPECIFICAÇÕES
        ======================================== */

        .especificacoes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 20px;
        }

        .spec {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 10px;
            padding: 10px;
            min-width: 0;
        }

        .spec small {
            display: block;
            color: #8294b2;
            font-size: 11px;
            margin-bottom: 4px;
        }

        .spec strong {
            display: block;
            font-size: 13px;
            color: #e5efff;
            overflow-wrap: anywhere;
        }


        /* ========================================
           AVALIAÇÕES
        ======================================== */

        .avaliacoes {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .avaliacao {
            display: grid;
            grid-template-columns: 80px 1fr 30px;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #b9c7dd;
        }

        .barra {
            height: 7px;
            background: #061530;
            border-radius: 10px;
            overflow: hidden;
        }

        .barra div {
            height: 100%;
            background: #35a9ff;
            border-radius: 10px;
        }


        /* ========================================
           SEM RESULTADOS / ERRO
        ======================================== */

        .sem-resultados {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            background: #0b2552;
            border-radius: 20px;
            color: #b9c7dd;
        }

        .sem-resultados h2 {
            color: white;
            margin-bottom: 10px;
        }


        /* ========================================
           RESPONSIVIDADE
        ======================================== */

        @media (max-width: 900px) {

            .produtos {
                grid-template-columns: repeat(2, 1fr);
            }

        }


        @media (max-width: 650px) {

            .pagina {
                padding: 30px 15px 50px;
            }

            .controles {
                grid-template-columns: 1fr;
            }

            .produtos {
                grid-template-columns: 1fr;
            }

            .informacoes {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }

        }

    </style>

</head>


<body>

    <main class="pagina">

        <div class="container">


            <!-- ========================================
                 ← VOLTAR
            ======================================== -->

            <a
                href="index.html"
                class="voltar"
            >
                ← Voltar para o início
            </a>


            <!-- ========================================
                 CABEÇALHO
            ======================================== -->

            <section class="pagina-topo">

                <div class="badge">
                    💻 CelularRank
                </div>

                <h1>
                    Ranking de
                    <span>PCs</span>
                </h1>

                <p>
                    Compare PCs, computadores e notebooks
                    por preço, desempenho, jogos, trabalho
                    e qualidade.
                </p>

            </section>


            <!-- ========================================
                 BUSCA E ORDENAÇÃO
            ======================================== -->

            <section class="controles">

                <input
                    type="search"
                    id="busca"
                    class="campo"
                    placeholder="🔎 Procurar PC, notebook ou marca..."
                    autocomplete="off"
                >


                <select
                    id="ordenacao"
                    class="select"
                >

                    <option value="ranking">
                        🏆 Melhor ranking
                    </option>

                    <option value="menor-preco">
                        💰 Menor preço
                    </option>

                    <option value="maior-preco">
                        💎 Maior preço
                    </option>

                    <option value="desempenho">
                        ⚡ Desempenho
                    </option>

                    <option value="jogos">
                        🎮 Jogos
                    </option>

                    <option value="trabalho">
                        💼 Trabalho
                    </option>

                    <option value="qualidade">
                        ⭐ Qualidade
                    </option>

                </select>

            </section>


            <!-- ========================================
                 INFORMAÇÕES
            ======================================== -->

            <div class="informacoes">

                <span id="contador">
                    Carregando PCs...
                </span>

                <span>
                    📊 Ranking CelularRank
                </span>

            </div>


            <!-- ========================================
                 LISTA DE PCS
            ======================================== -->

            <section
                id="listaPCs"
                class="produtos"
            ></section>


        </div>

    </main>


    <!-- =================================================
         📦 BANCO DE DADOS

         IMPORTANTE:
         O dados.js é carregado SOMENTE UMA VEZ.
    ================================================== -->

    <script src="./dados.js"></script>


    <!-- =================================================
         💻 SISTEMA DOS PCS
    ================================================== -->

    <script>

        "use strict";


        /* ========================================
           ELEMENTOS
        ======================================== */

        const lista =
            document.getElementById("listaPCs");

        const busca =
            document.getElementById("busca");

        const ordenacao =
            document.getElementById("ordenacao");

        const contador =
            document.getElementById("contador");


        /* ========================================
           PREÇO
        ======================================== */

        function precoBRL(valor) {

            const numero =
                Number(valor);

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


        /* ========================================
           NOTA GERAL
        ======================================== */

        function notaProduto(produto) {

            const notas = [];


            const desempenho =
                Number(produto.desempenho);

            const jogos =
                Number(produto.jogos);

            const trabalho =
                Number(produto.trabalho);

            const qualidade =
                Number(produto.qualidade);


            if (
                Number.isFinite(desempenho)
            ) {

                notas.push(desempenho);

            }


            if (
                Number.isFinite(jogos)
            ) {

                notas.push(jogos);

            }


            if (
                Number.isFinite(trabalho)
            ) {

                notas.push(trabalho);

            }


            if (
                Number.isFinite(qualidade)
            ) {

                notas.push(qualidade);

            }


            if (
                notas.length === 0
            ) {

                return 0;

            }


            const soma =
                notas.reduce(
                    (total, nota) =>
                        total + nota,
                    0
                );


            return Math.round(
                soma / notas.length
            );

        }


        /* ========================================
           BARRA DE AVALIAÇÃO
        ======================================== */

        function avaliacao(
            nome,
            valor
        ) {

            const numero =
                Number(valor);


            if (
                !Number.isFinite(numero) ||
                numero <= 0
            ) {

                return "";

            }


            const valorSeguro =
                Math.max(
                    0,
                    Math.min(
                        100,
                        numero
                    )
                );


            return `

                <div class="avaliacao">

                    <span>
                        ${nome}
                    </span>

                    <div class="barra">

                        <div
                            style="width:${valorSeguro}%"
                        ></div>

                    </div>

                    <strong>
                        ${numero}
                    </strong>

                </div>

            `;

        }


        /* ========================================
           CRIAR CARD
        ======================================== */

        function criarCard(
            produto,
            posicao
        ) {

            const nota =
                notaProduto(produto);


            return `

                <article class="produto">

                    <span class="marca">
                        ${produto.marca || "Marca"}
                    </span>


                    <h2>
                        ${produto.nome || "PC sem nome"}
                    </h2>


                    <div class="preco">
                        ${precoBRL(produto.preco)}
                    </div>


                    <div class="nota">
                        🏆 Nota ${nota}/100
                    </div>


                    <div class="especificacoes">


                        <div class="spec">

                            <small>
                                Processador
                            </small>

                            <strong>
                                ${produto.processador || "Não informado"}
                            </strong>

                        </div>


                        <div class="spec">

                            <small>
                                RAM
                            </small>

                            <strong>
                                ${produto.ram || "Não informado"}
                            </strong>

                        </div>


                        <div class="spec">

                            <small>
                                Armazenamento
                            </small>

                            <strong>
                                ${produto.armazenamento || "Não informado"}
                            </strong>

                        </div>


                        <div class="spec">

                            <small>
                                Vídeo
                            </small>

                            <strong>
                                ${produto.video || "Não informado"}
                            </strong>

                        </div>


                        <div class="spec">

                            <small>
                                Tipo
                            </small>

                            <strong>
                                ${produto.categoria || "PC"}
                            </strong>

                        </div>


                        <div class="spec">

                            <small>
                                Ranking
                            </small>

                            <strong>
                                #${posicao}
                            </strong>

                        </div>


                    </div>


                    <div class="avaliacoes">


                        ${avaliacao(
                            "Desempenho",
                            produto.desempenho
                        )}


                        ${avaliacao(
                            "Jogos",
                            produto.jogos
                        )}


                        ${avaliacao(
                            "Trabalho",
                            produto.trabalho
                        )}


                        ${avaliacao(
                            "Qualidade",
                            produto.qualidade
                        )}


                    </div>


                </article>

            `;

        }


        /* ========================================
           FILTRAR
        ======================================== */

        function filtrarProdutos() {

            const texto =
                busca.value
                    .toLowerCase()
                    .trim();


            /*
             * O seu dados.js possui:
             *
             * const pcs = [...]
             *
             * Por isso usamos "pcs" diretamente.
             */

            let resultado =
                Array.isArray(pcs)
                    ? [...pcs]
                    : [];


            /* BUSCA */

            if (texto) {

                resultado =
                    resultado.filter(
                        produto => {

                            const nome =
                                String(
                                    produto.nome || ""
                                ).toLowerCase();


                            const marca =
                                String(
                                    produto.marca || ""
                                ).toLowerCase();


                            const processador =
                                String(
                                    produto.processador || ""
                                ).toLowerCase();


                            const categoria =
                                String(
                                    produto.categoria || ""
                                ).toLowerCase();


                            const video =
                                String(
                                    produto.video || ""
                                ).toLowerCase();


                            return (

                                nome.includes(texto) ||

                                marca.includes(texto) ||

                                processador.includes(texto) ||

                                categoria.includes(texto) ||

                                video.includes(texto)

                            );

                        }
                    );

            }


            /* ========================================
               ORDENAÇÃO
            ======================================== */

            switch (
                ordenacao.value
            ) {


                case "menor-preco":

                    resultado.sort(
                        (a, b) => {

                            const precoA =
                                Number(a.preco);

                            const precoB =
                                Number(b.preco);


                            return (
                                (Number.isFinite(precoA)
                                    ? precoA
                                    : Infinity)
                                -
                                (Number.isFinite(precoB)
                                    ? precoB
                                    : Infinity)
                            );

                        }
                    );

                    break;


                case "maior-preco":

                    resultado.sort(
                        (a, b) => {

                            const precoA =
                                Number(a.preco);

                            const precoB =
                                Number(b.preco);


                            return (
                                (Number.isFinite(precoB)
                                    ? precoB
                                    : -Infinity)
                                -
                                (Number.isFinite(precoA)
                                    ? precoA
                                    : -Infinity)
                            );

                        }
                    );

                    break;


                case "desempenho":

                    resultado.sort(
                        (a, b) =>
                            Number(
                                b.desempenho || 0
                            )
                            -
                            Number(
                                a.desempenho || 0
                            )
                    );

                    break;


                case "jogos":

                    resultado.sort(
                        (a, b) =>
                            Number(
                                b.jogos || 0
                            )
                            -
                            Number(
                                a.jogos || 0
                            )
                    );

                    break;


                case "trabalho":

                    resultado.sort(
                        (a, b) =>
                            Number(
                                b.trabalho || 0
                            )
                            -
                            Number(
                                a.trabalho || 0
                            )
                    );

                    break;


                case "qualidade":

                    resultado.sort(
                        (a, b) =>
                            Number(
                                b.qualidade || 0
                            )
                            -
                            Number(
                                a.qualidade || 0
                            )
                    );

                    break;


                case "ranking":

                default:

                    resultado.sort(
                        (a, b) =>
                            notaProduto(b)
                            -
                            notaProduto(a)
                    );

                    break;

            }


            mostrarProdutos(
                resultado
            );

        }


        /* ========================================
           MOSTRAR PRODUTOS
        ======================================== */

        function mostrarProdutos(
            produtos
        ) {

            lista.innerHTML = "";


            contador.textContent =
                `${produtos.length} ${
                    produtos.length === 1
                        ? "produto"
                        : "produtos"
                } encontrado${
                    produtos.length === 1
                        ? ""
                        : "s"
                }`;


            if (
                produtos.length === 0
            ) {

                lista.innerHTML = `

                    <div class="sem-resultados">

                        <h2>
                            😕 Nenhum PC encontrado
                        </h2>

                        <p>
                            Tente procurar por outra
                            marca, modelo ou processador.
                        </p>

                    </div>

                `;

                return;

            }


            const html =
                produtos
                    .map(
                        (produto, index) =>
                            criarCard(
                                produto,
                                index + 1
                            )
                    )
                    .join("");


            lista.innerHTML =
                html;

        }


        /* ========================================
           EVENTOS
        ======================================== */

        busca.addEventListener(
            "input",
            filtrarProdutos
        );


        ordenacao.addEventListener(
            "change",
            filtrarProdutos
        );


        /* ========================================
           INICIAR
        ======================================== */

        try {

            if (
                typeof pcs !== "undefined" &&
                Array.isArray(pcs)
            ) {

                console.log(
                    "💻 PCs carregados:",
                    pcs.length
                );


                filtrarProdutos();

            } else {

                throw new Error(
                    "A variável pcs não foi encontrada."
                );

            }

        } catch (erro) {

            console.error(
                "Erro no CelularRank:",
                erro
            );


            contador.textContent =
                "Erro ao carregar dados.";


            lista.innerHTML = `

                <div class="sem-resultados">

                    <h2>
                        ⚠️ Erro ao carregar os PCs
                    </h2>

                    <p>
                        Não foi possível carregar
                        o catálogo de PCs.
                    </p>

                    <p>
                        Verifique se o arquivo
                        <strong>dados.js</strong>
                        está na mesma pasta
                        deste arquivo.
                    </p>

                </div>

            `;

        }

    </script>

</body>

</html>

function estatisticasCatalogo() {

    const marcasPCs = [
        ...new Set(
            pcs.map(pc => pc.marca)
        )
    ];

    return {
        celulares: celulares.length,
        pcs: pcs.length,
        total: todosProdutos.length,
        marcasCelulares: marcasCelulares.length,
        marcasPCs: marcasPCs.length
    };

}
<script src="script.js"></script>
