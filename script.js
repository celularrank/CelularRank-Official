/* ========================================
   📱💻 CELULARRANK-OFFICIAL
   script.js
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 CelularRank carregado com sucesso!");

    /* ========================================
       🔗 NAVEGAÇÃO SUAVE
    ======================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (event) => {

            const destino = link.getAttribute("href");

            if (destino === "#") return;

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
       🏷️ TAGS DE CATEGORIA
    ======================================== */

    const tags = document.querySelectorAll(".tag");

    tags.forEach(tag => {

        tag.addEventListener("click", () => {

            const categoria = tag.textContent.trim();

            console.log("Categoria selecionada:", categoria);

            // Efeito visual
            tags.forEach(item => {
                item.classList.remove("ativa");
            });

            tag.classList.add("ativa");

        });

    });


    /* ========================================
       📱 BOTÃO CELULARES
    ======================================== */

    const cardCelulares = document.querySelector(
        'a[href="celulares.html"]'
    );

    if (cardCelulares) {

        cardCelulares.addEventListener("click", () => {

            console.log("📱 Abrindo página de celulares...");

        });

    }


    /* ========================================
       💻 BOTÃO PCS
    ======================================== */

    const cardPCs = document.querySelector(
        'a[href="pcs.html"]'
    );

    if (cardPCs) {

        cardPCs.addEventListener("click", () => {

            console.log("💻 Abrindo página de PCs...");

        });

    }


    /* ========================================
       🖱️ EFEITO DOS CARDS
    ======================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });


    /* ========================================
       📅 ANO AUTOMÁTICO
    ======================================== */

    const ano = new Date().getFullYear();

    const footer = document.querySelector("footer");

    if (footer) {

        footer.innerHTML =
            `© ${ano} CelularRank-Official — Compare. Escolha. Compre melhor.`;

    }


    /* ========================================
       📊 SISTEMA BÁSICO DO SITE
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

});  
