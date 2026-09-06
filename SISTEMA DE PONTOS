/* =========================================================
   CELULARRANK — SISTEMA DE PONTOS
   Módulo independente do dados.js

   Estrutura inspirada na ideia de separar o desempenho em:
   CPU, GPU, MEM e UX.

   IMPORTANTE:
   - Não reproduz a fórmula proprietária de nenhum benchmark.
   - Os quatro subtestes usam uma escala interna de 0 a 1000.
   - O total é a soma dos quatro subtestes: 0 a 4000.
   - Este arquivo não depende de dados.js e pode ser integrado depois.
========================================================= */

"use strict";

const PONTUACAO_CONFIG = {
    minimo: 0,
    maximoSubteste: 1000,
    categorias: ["CPU", "GPU", "MEM", "UX"]
};

function limitarPontuacao(valor) {
    const numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return 0;
    }

    return Math.max(
        PONTUACAO_CONFIG.minimo,
        Math.min(PONTUACAO_CONFIG.maximoSubteste, Math.round(numero))
    );
}

/**
 * Cria uma pontuação completa.
 * Exemplo:
 * criarPontuacao({ CPU: 900, GPU: 850, MEM: 800, UX: 920 })
 */
function criarPontuacao({ CPU = 0, GPU = 0, MEM = 0, UX = 0 } = {}) {
    const pontos = {
        CPU: limitarPontuacao(CPU),
        GPU: limitarPontuacao(GPU),
        MEM: limitarPontuacao(MEM),
        UX: limitarPontuacao(UX)
    };

    pontos.total =
        pontos.CPU +
        pontos.GPU +
        pontos.MEM +
        pontos.UX;

    return pontos;
}

/**
 * Retorna a pontuação de um produto sem alterar o objeto original.
 */
function calcularCelularRankScore(produto = {}) {
    return criarPontuacao({
        CPU: produto.CPU ?? produto.cpu,
        GPU: produto.GPU ?? produto.gpu,
        MEM: produto.MEM ?? produto.mem,
        UX: produto.UX ?? produto.ux
    });
}

/**
 * Ordena produtos do maior para o menor CelularRank Score.
 */
function ordenarPorCelularRankScore(lista = []) {
    return [...lista].sort((a, b) => {
        return (
            calcularCelularRankScore(b).total -
            calcularCelularRankScore(a).total
        );
    });
}

/**
 * Classificação visual do resultado.
 */
function classificarCelularRankScore(total) {
    const numero = Number(total);
    const pontos = Number.isFinite(numero)
        ? Math.max(0, Math.min(4000, Math.round(numero)))
        : 0;

    if (pontos >= 3600) return "Excelente";
    if (pontos >= 3000) return "Muito bom";
    if (pontos >= 2400) return "Bom";
    if (pontos >= 1600) return "Intermediário";
    return "Básico";
}

// Disponibiliza o módulo para o navegador.
if (typeof window !== "undefined") {
    window.PONTUACAO_CONFIG = PONTUACAO_CONFIG;
    window.criarPontuacao = criarPontuacao;
    window.calcularCelularRankScore = calcularCelularRankScore;
    window.ordenarPorCelularRankScore = ordenarPorCelularRankScore;
    window.classificarCelularRankScore = classificarCelularRankScore;
}

// Também permite uso em Node.js durante testes.
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        PONTUACAO_CONFIG,
        limitarPontuacao,
        criarPontuacao,
        calcularCelularRankScore,
        ordenarPorCelularRankScore,
        classificarCelularRankScore
    };
}
