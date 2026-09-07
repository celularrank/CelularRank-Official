 /*
====================================================
 CELULARRANK - SISTEMA DE PONTOS
 CPU + GPU + MEM + UX
====================================================

Cada categoria vale no máximo:

CPU = 250.000
GPU = 250.000
MEM = 250.000
UX  = 250.000

TOTAL = 1.000.000

O sistema é separado da dados.js.
====================================================
*/


document.addEventListener("DOMContentLoaded", iniciarPontos);


function iniciarPontos() {

    console.log("💠 CelularRank - Sistema de pontos iniciado.");


    /*
    ====================================================
    CARREGA OS PRODUTOS
    ====================================================
    */

    const celulares =
        Array.isArray(window.celulares)
            ? window.celulares
            : [];

    const pcs =
        Array.isArray(window.pcs)
            ? window.pcs
            : [];


    const produtos = [

        ...celulares.map(produto => ({
            ...produto,
            tipo: "Celular"
        })),

        ...pcs.map(produto => ({
            ...produto,
            tipo: "PC"
        }))

    ];


    console.log(
        `📱 ${celulares.length} celulares carregados.`
    );

    console.log(
        `💻 ${pcs.length} PCs carregados.`
    );


    if (produtos.length === 0) {

        console.warn(
            "⚠️ Nenhum produto encontrado na dados.js."
        );

        mostrarErro();

        return;
    }


    /*
    ====================================================
    ELEMENTOS
    ====================================================
    */

    const busca =
        document.getElementById("busca");

    const resultados =
        document.getElementById("resultados");

    const listaRanking =
        document.getElementById("lista-ranking");


    /*
    ====================================================
    BUSCA
    ====================================================
    */

    busca.addEventListener("input", function () {

        const texto =
            this.value
                .toLowerCase()
                .trim();


        if (!texto) {

            resultados.style.display = "none";

            resultados.innerHTML = "";

            return;
        }


        const encontrados =
            produtos
                .filter(produto => {

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


                    return (
                        nome.includes(texto) ||
                        marca.includes(texto) ||
                        processador.includes(texto)
                    );

                })
                .slice(0, 8);


        mostrarResultados(encontrados);

    });


    /*
    ====================================================
    RANKING
    ====================================================
    */

    criarRanking(
        produtos,
        listaRanking
    );

}


/*
====================================================
 MOSTRAR RESULTADOS DA BUSCA
====================================================
*/

function mostrarResultados(produtos) {

    const container =
        document.getElementById("resultados");


    if (produtos.length === 0) {

        container.style.display = "block";

        container.innerHTML = `
            <div class="resultado-item">
                <strong>Nenhum dispositivo encontrado.</strong>
                <span>Tente outro nome ou processador.</span>
            </div>
        `;

        return;
    }


    container.style.display = "block";


    container.innerHTML =
        produtos.map((produto, index) => {

            return `

                <div
                    class="resultado-item"
                    data-index="${index}"
                >

                    <strong>
                        ${escaparHTML(produto.nome || "Dispositivo")}
                    </strong>

                    <span>
                        ${escaparHTML(produto.tipo)}
                        •
                        ${escaparHTML(produto.marca || "")}
                    </span>

                </div>

            `;

        }).join("");


    /*
    ====================================================
    CLIQUE NO RESULTADO
    ====================================================
    */

    container
        .querySelectorAll(".resultado-item")
        .forEach((elemento, index) => {

            elemento.addEventListener(
                "click",
                function () {

                    const nome =
                        elemento
                            .querySelector("strong")
                            .textContent;


                    /*
                    Procura novamente pelo nome.
                    */

                    const celulares =
                        Array.isArray(window.celulares)
                            ? window.celulares
                            : [];

                    const pcs =
                        Array.isArray(window.pcs)
                            ? window.pcs
                            : [];


                    const produtosTodos = [

                        ...celulares.map(p => ({
                            ...p,
                            tipo: "Celular"
                        })),

                        ...pcs.map(p => ({
                            ...p,
                            tipo: "PC"
                        }))

                    ];


                    const produto =
                        produtosTodos.find(
                            p => p.nome === nome
                        );


                    if (produto) {

                        mostrarPontuacao(produto);

                    }


                    container.style.display = "none";

                    document.getElementById("busca").value =
                        nome;

                }
            );

        });

}


/*
====================================================
 CALCULAR PONTUAÇÃO
====================================================
*/

function calcularPontuacao(produto) {

    /*
    ====================================================
    CPU
    ====================================================

    Usa desempenho existente da sua dados.js.

    Se desempenho = 90
    CPU ficará próxima de 225.000.
    */

    const desempenho =
        normalizar(
            produto.desempenho
        );


    let cpu =
        desempenho * 250000;


    /*
    ====================================================
    GPU
    ====================================================

    Usa jogos + desempenho.
    */

    const jogos =
        normalizar(
            produto.jogos
        );


    let gpu =
        (
            (jogos * 0.65) +
            (desempenho * 0.35)
        ) * 250000;


    /*
    ====================================================
    MEM
    ====================================================

    Considera RAM e armazenamento.
    */

    const ram =
        converterNumero(
            produto.ram
        );


    const armazenamento =
        converterNumero(
            produto.armazenamento
        );


    let memBase = 0;


    if (ram >= 24) {
        memBase = 1;
    }
    else if (ram >= 16) {
        memBase = 0.90;
    }
    else if (ram >= 12) {
        memBase = 0.80;
    }
    else if (ram >= 8) {
        memBase = 0.70;
    }
    else if (ram >= 6) {
        memBase = 0.60;
    }
    else if (ram >= 4) {
        memBase = 0.45;
    }
    else {
        memBase = 0.30;
    }


    let armazenamentoScore = 0;


    if (armazenamento >= 2048) {
        armazenamentoScore = 1;
    }
    else if (armazenamento >= 1024) {
        armazenamentoScore = 0.95;
    }
    else if (armazenamento >= 512) {
        armazenamentoScore = 0.85;
    }
    else if (armazenamento >= 256) {
        armazenamentoScore = 0.75;
    }
    else if (armazenamento >= 128) {
        armazenamentoScore = 0.65;
    }
    else if (armazenamento >= 64) {
        armazenamentoScore = 0.50;
    }
    else {
        armazenamentoScore = 0.35;
    }


    let memScore =
        (
            (memBase * 0.65) +
            (armazenamentoScore * 0.35)
        );


    let mem =
        memScore * 250000;


    /*
    ====================================================
    UX
    ====================================================

    Usa qualidade + desempenho + jogos.
    */

    const qualidade =
        normalizar(
            produto.qualidade
        );


    let uxScore =
        (
            (qualidade * 0.50) +
            (desempenho * 0.30) +
            (jogos * 0.20)
        );


    let ux =
        uxScore * 250000;


    /*
    ====================================================
    LIMITES
    ====================================================
    */

    cpu = limitar(cpu, 0, 250000);

    gpu = limitar(gpu, 0, 250000);

    mem = limitar(mem, 0, 250000);

    ux = limitar(ux, 0, 250000);


    /*
    ====================================================
    TOTAL
    ====================================================
    */

    const total =
        cpu +
        gpu +
        mem +
        ux;


    return {

        cpu: Math.round(cpu),

        gpu: Math.round(gpu),

        mem: Math.round(mem),

        ux: Math.round(ux),

        total: Math.round(total)

    };

}


/*
====================================================
 MOSTRAR PONTUAÇÃO
====================================================
*/

function mostrarPontuacao(produto) {

    const scores =
        calcularPontuacao(produto);


    const resultado =
        document.getElementById(
            "resultado-pontos"
        );


    resultado.classList.remove("oculto");


    /*
    ====================================================
    INFORMAÇÕES
    ====================================================
    */

    document.getElementById(
        "tipo-produto"
    ).textContent =
        produto.tipo || "DISPOSITIVO";


    document.getElementById(
        "nome-produto"
    ).textContent =
        produto.nome || "Dispositivo";


    document.getElementById(
        "processador-produto"
    ).textContent =
        produto.processador ||
        "Processador não informado";


    /*
    ====================================================
    PONTOS
    ====================================================
    */

    document.getElementById(
        "score-cpu"
    ).textContent =
        formatarPontos(scores.cpu);


    document.getElementById(
        "score-gpu"
    ).textContent =
        formatarPontos(scores.gpu);


    document.getElementById(
        "score-mem"
    ).textContent =
        formatarPontos(scores.mem);


    document.getElementById(
        "score-ux"
    ).textContent =
        formatarPontos(scores.ux);


    document.getElementById(
        "pontuacao-total"
    ).textContent =
        formatarPontos(scores.total);


    /*
    ====================================================
    BARRAS
    ====================================================
    */

    document.getElementById(
        "barra-cpu"
    ).style.width =
        porcentagem(scores.cpu) + "%";


    document.getElementById(
        "barra-gpu"
    ).style.width =
        porcentagem(scores.gpu) + "%";


    document.getElementById(
        "barra-mem"
    ).style.width =
        porcentagem(scores.mem) + "%";


    document.getElementById(
        "barra-ux"
    ).style.width =
        porcentagem(scores.ux) + "%";


    /*
    ====================================================
    RESUMO
    ====================================================
    */

    document.getElementById(
        "resumo-cpu"
    ).textContent =
        formatarPontos(scores.cpu);


    document.getElementById(
        "resumo-gpu"
    ).textContent =
        formatarPontos(scores.gpu);


    document.getElementById(
        "resumo-mem"
    ).textContent =
        formatarPontos(scores.mem);


    document.getElementById(
        "resumo-ux"
    ).textContent =
        formatarPontos(scores.ux);


    /*
    ====================================================
    ROLAR ATÉ O RESULTADO
    ====================================================
    */

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/*
====================================================
 RANKING
====================================================
*/

function criarRanking(produtos, container) {

    const ranking =
        produtos
            .map(produto => {

                return {

                    produto,

                    scores:
                        calcularPontuacao(produto)

                };

            })
            .sort(
                (a, b) =>
                    b.scores.total -
                    a.scores.total
            )
            .slice(0, 20);


    if (ranking.length === 0) {

        container.innerHTML = `
            <div class="carregando">
                Nenhum dispositivo disponível.
            </div>
        `;

        return;
    }


    container.innerHTML =
        ranking.map((item, index) => {

            const produto =
                item.produto;

            const score =
                item.scores;


            let medalha =
                index + 1;


            if (index === 0) {
                medalha = "🥇";
            }

            else if (index === 1) {
                medalha = "🥈";
            }

            else if (index === 2) {
                medalha = "🥉";
            }


            return `

                <div class="ranking-item">

                    <div class="posicao">
                        ${medalha}
                    </div>

                    <div class="ranking-info">

                        <strong>
                            ${escaparHTML(
                                produto.nome ||
                                "Dispositivo"
                            )}
                        </strong>

                        <span>
                            ${escaparHTML(
                                produto.tipo ||
                                "Dispositivo"
                            )}
                            •
                            ${escaparHTML(
                                produto.marca ||
                                ""
                            )}
                        </span>

                    </div>

                    <div class="ranking-score">

                        <strong>
                            ${formatarPontos(
                                score.total
                            )}
                        </strong>

                        <span>
                            pontos
                        </span>

                    </div>

                </div>

            `;

        }).join("");

}


/*
====================================================
 FUNÇÕES AUXILIARES
====================================================
*/


function normalizar(valor) {

    let numero =
        parseFloat(
            String(valor)
                .replace(",", ".")
                .replace(/[^\d.]/g, "")
        );


    if (isNaN(numero)) {
        return 0.5;
    }


    /*
    Caso o banco use 0-100.
    */

    if (numero > 1) {

        numero =
            numero / 100;

    }


    return limitar(
        numero,
        0,
        1
    );

}


function converterNumero(valor) {

    if (typeof valor === "number") {

        return valor;

    }


    if (!valor) {

        return 0;

    }


    const texto =
        String(valor)
            .toLowerCase()
            .replace(",", ".");


    const numero =
        parseFloat(
            texto.replace(/[^\d.]/g, "")
        );


    if (isNaN(numero)) {

        return 0;

    }


    /*
    Converte TB para GB.
    */

    if (texto.includes("tb")) {

        return numero * 1024;

    }


    return numero;

}


function limitar(valor, minimo, maximo) {

    return Math.max(
        minimo,
        Math.min(
            maximo,
            valor
        )
    );

}


function porcentagem(valor) {

    return limitar(
        (valor / 250000) * 100,
        0,
        100
    );

}


function formatarPontos(valor) {

    return Number(valor)
        .toLocaleString("pt-BR");

}


function escaparHTML(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function mostrarErro() {

    const ranking =
        document.getElementById(
            "lista-ranking"
        );


    ranking.innerHTML = `

        <div class="carregando">

            ⚠️ Não foi possível carregar os dispositivos.

            <br><br>

            Verifique se o arquivo
            <strong>dados.js</strong>
            está na mesma pasta.

        </div>

    `;

}
