// ========================================
// 📱 BANCO DE CELULARES
// ========================================

const celulares = [
    // seus celulares aqui
];


// ========================================
// 💻 BANCO DE PCS
// ========================================

const pcs = [
    // seus PCs aqui
];


// ========================================
// 🔄 TODOS OS PRODUTOS
// ========================================

const todosProdutos = [
    ...celulares,
    ...pcs
];


// ========================================
// 🏷️ MARCAS
// ========================================

const marcasCelulares = [
    ...new Set(
        celulares.map(celular => celular.marca)
    )
];

const marcasPCs = [
    ...new Set(
        pcs.map(pc => pc.marca)
    )
];


// ========================================
// 📊 ESTATÍSTICAS
// ========================================

function estatisticasCatalogo() {

    return {
        celulares: celulares.length,
        pcs: pcs.length,
        total: todosProdutos.length,
        marcasCelulares: marcasCelulares.length,
        marcasPCs: marcasPCs.length
    };

}
/* =========================================================
   📊 ESTATÍSTICAS DO CATÁLOGO
========================================================= */

function estatisticasCatalogo() {

    return {
        celulares: celulares.length,
        pcs: pcs.length,
        total: todosProdutos.length,
        marcasCelulares: marcasCelulares.length,
        marcasPCs: marcasPCs.length
    };

}


/* =========================================================
   🌐 DISPONIBILIZAR DADOS PARA AS PÁGINAS
========================================================= */

window.celulares = celulares;
window.pcs = pcs;
window.todosProdutos = todosProdutos;
window.marcasCelulares = marcasCelulares;
window.marcasPCs = marcasPCs;
window.estatisticasCatalogo = estatisticasCatalogo;


/* =========================================================
   ✅ TESTE
========================================================= */

console.log("====================================");
console.log("📱 CELULARRANK");
console.log("====================================");
console.log("Celulares:", celulares.length);
console.log("PCs/Notebooks:", pcs.length);
console.log("Total:", todosProdutos.length);
console.log("====================================");
console.log("✅ dados.js carregado corretamente!");
