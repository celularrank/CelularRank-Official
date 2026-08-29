/* ========================================
   📱💻 CELULARRANK-OFFICIAL
   script.js
======================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 CelularRank carregado com sucesso!");

    /* ========================================
       🔗 NAVEGAÇÃO SUAVE
    ======================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") return;

            const elemento = document.querySelector(destino);

            if (elemento) {
                event.preventDefault();

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ========================================
       🏷️ TAGS
    ======================================== */

    document.querySelectorAll(".tag").forEach(tag => {

        tag.addEventListener("click", () => {

            document.querySelectorAll(".tag").forEach(item => {
                item.classList.remove("ativa");
            });

            tag.classList.add("ativa");

            console.log(
                "Categoria selecionada:",
                tag.textContent.trim()
            );

        });

    });


    /* ========================================
       📱 CELULARES
    ======================================== */

    const cardCelulares =
        document.querySelector('a[href="celulares.html"]');

    if (cardCelulares) {

        cardCelulares.addEventListener("click", () => {
            console.log("📱 Abrindo página de celulares...");
        });

    }


    /* ========================================
       💻 PCS
    ======================================== */

    const cardPCs =
        document.querySelector('a[href="pcs.html"]');

    if (cardPCs) {

        cardPCs.addEventListener("click", () => {
            console.log("💻 Abrindo página de PCs...");
        });

    }


    /* ========================================
       🖱️ CARDS
    ======================================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });


    /* ========================================
       📅 ANO
    ======================================== */

    const footer = document.querySelector("footer");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} CelularRank-Official — Compare. Escolha. Compre melhor.`;

    }


    /* ========================================
       📊 SISTEMA CELULARRANK
    ======================================== */

    const CelularRank = {

        nome: "CelularRank-Official",

        versao: "1.0.0",

        categorias: [
            "Jogos",
            "Desempenho",
            "Trabalho",
            "Qualidade",
            "Preço",
            "Custo-benefício"
        ],

        iniciar() {

            console.log(
                `✅ ${this.nome} v${this.versao} iniciado.`
            );

        }

    };


    CelularRank.iniciar();


    /* ========================================
       🔍 VERIFICAÇÃO DOS DADOS
    ======================================== */

    if (typeof celulares !== "undefined") {

        console.log(
            `📱 ${celulares.length} celulares carregados.`
        );

    } else {

        console.error(
            "❌ A variável 'celulares' não foi encontrada."
        );

    }


    if (typeof pcs !== "undefined") {

        console.log(
            `💻 ${pcs.length} PCs/notebooks carregados.`
        );

    } else {

        console.error(
            "❌ A variável 'pcs' não foi encontrada."
        );

    }


    if (typeof todosProdutos !== "undefined") {

        console.log(
            `📦 ${todosProdutos.length} produtos no catálogo.`
        );

    }

});  
