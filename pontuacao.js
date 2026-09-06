/*
 * CelularRank Benchmark v1
 * Metodologia própria inspirada na divisão CPU / GPU / MEM / UX.
 *
 * Escala máxima: 1.000.000 pontos
 * CPU: 300.000
 * GPU: 300.000
 * MEM: 200.000
 * UX : 200.000
 *
 * Cada teste recebe um resultado normalizado de 0 a 100.
 * A função calcula os pontos proporcionalmente ao peso do teste.
 */

const CELULARRANK_CONFIG = {
    versao: "1.0",
    totalMaximo: 1000000,

    categorias: {
        CPU: {
            maximo: 300000,
            testes: {
                singleCore: { nome: "Single-Core", peso: 100000 },
                multiCore: { nome: "Multi-Core", peso: 120000 },
                processamento: { nome: "Processamento", peso: 50000 },
                eficiencia: { nome: "Eficiência", peso: 30000 }
            }
        },

        GPU: {
            maximo: 300000,
            testes: {
                graficos3D: { nome: "Gráficos 3D", peso: 120000 },
                jogos: { nome: "Jogos", peso: 100000 },
                estabilidade: { nome: "Estabilidade", peso: 50000 },
                renderizacao: { nome: "Renderização", peso: 30000 }
            }
        },

        MEM: {
            maximo: 200000,
            testes: {
                ram: { nome: "RAM", peso: 80000 },
                armazenamento: { nome: "Armazenamento", peso: 70000 },
                memoriaAleatoria: { nome: "Memória aleatória", peso: 30000 },
                desempenhoGeral: { nome: "Desempenho geral", peso: 20000 }
            }
        },

        UX: {
            maximo: 200000,
            testes: {
                inicializacao: { nome: "Inicialização", peso: 30000 },
                aberturaApps: { nome: "Abertura de aplicativos", peso: 50000 },
                navegacao: { nome: "Navegação", peso: 40000 },
                multitarefa: { nome: "Multitarefa", peso: 40000 },
                interface: { nome: "Interface", peso: 40000 }
            }
        }
    }
};

function limitar(valor, minimo = 0, maximo = 100) {
    const numero = Number(valor);
    if (!Number.isFinite(numero)) return minimo;
    return Math.max(minimo, Math.min(maximo, numero));
}

function calcularTeste(resultado, peso) {
    return Math.round((limitar(resultado) / 100) * peso);
}

function calcularCategoria(nomeCategoria, resultados = {}) {
    const categoria = CELULARRANK_CONFIG.categorias[nomeCategoria];
    if (!categoria) throw new Error(`Categoria inválida: ${nomeCategoria}`);

    let pontos = 0;
    const detalhes = {};

    for (const [id, teste] of Object.entries(categoria.testes)) {
        const resultado = limitar(resultados[id] ?? 0);
        const pontosTeste = calcularTeste(resultado, teste.peso);

        detalhes[id] = {
            nome: teste.nome,
            resultado,
            pontos: pontosTeste,
            maximo: teste.peso
        };

        pontos += pontosTeste;
    }

    return {
        pontos,
        maximo: categoria.maximo,
        percentual: Number(((pontos / categoria.maximo) * 100).toFixed(2)),
        detalhes
    };
}

function calcularCelularRank(resultados = {}) {
    const resultado = {};

    for (const categoria of ["CPU", "GPU", "MEM", "UX"]) {
        resultado[categoria] = calcularCategoria(
            categoria,
            resultados[categoria] || {}
        );
    }

    const total = Object.values(resultado)
        .reduce((soma, categoria) => soma + categoria.pontos, 0);

    return {
        versao: CELULARRANK_CONFIG.versao,
        total,
        maximo: CELULARRANK_CONFIG.totalMaximo,
        percentual: Number(((total / CELULARRANK_CONFIG.totalMaximo) * 100).toFixed(2)),
        categorias: resultado
    };
}

/*
 * Exemplo:
 *
 * const resultado = calcularCelularRank({
 *     CPU: {
 *         singleCore: 90,
 *         multiCore: 85,
 *         processamento: 88,
 *         eficiencia: 80
 *     },
 *     GPU: {
 *         graficos3D: 92,
 *         jogos: 90,
 *         estabilidade: 85,
 *         renderizacao: 88
 *     },
 *     MEM: {
 *         ram: 90,
 *         armazenamento: 80,
 *         memoriaAleatoria: 85,
 *         desempenhoGeral: 88
 *     },
 *     UX: {
 *         inicializacao: 85,
 *         aberturaApps: 90,
 *         navegacao: 92,
 *         multitarefa: 88,
 *         interface: 95
 *     }
 * });
 *
 * console.log(resultado);
 */

if (typeof window !== "undefined") {
    window.CELULARRANK_CONFIG = CELULARRANK_CONFIG;
    window.calcularTeste = calcularTeste;
    window.calcularCategoria = calcularCategoria;
    window.calcularCelularRank = calcularCelularRank;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        CELULARRANK_CONFIG,
        limitar,
        calcularTeste,
        calcularCategoria,
        calcularCelularRank
    };
}
