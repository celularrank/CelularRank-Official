/*
=========================================================
CELULARRANK - FUNÇÕES GERAIS
=========================================================
*/

(function () {

    "use strict";


    function setupMenu() {

        const button =
            document.getElementById("menuToggle");

        const nav =
            document.getElementById("mainNav");


        if (!button || !nav) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                const opened =
                    nav.classList.toggle("open");

                button.setAttribute(
                    "aria-expanded",
                    String(opened)
                );

            }
        );


        nav.querySelectorAll("a").forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav.classList.remove("open");

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

    }


    function setupYear() {

        const year =
            document.getElementById(
                "currentYear"
            );


        if (year) {
            year.textContent =
                new Date().getFullYear();
        }

    }


    function searchHome() {

        const input =
            document.getElementById(
                "homeSearch"
            );

        const button =
            document.getElementById(
                "homeSearchButton"
            );

        const results =
            document.getElementById(
                "homeSearchResults"
            );


        if (
            !input ||
            !button ||
            !results
        ) {
            return;
        }


        function execute() {

            const term =
                input.value
                    .toLowerCase()
                    .trim();


            results.innerHTML = "";


            if (!term) {

                results.innerHTML = `
                    <div class="search-hint">
                        Digite o nome de um celular ou PC.
                    </div>
                `;

                return;

            }


            const phones =
                Array.isArray(window.celulares)
                    ? window.celulares
                    : [];


            const pcs =
                Array.isArray(window.pcs)
                    ? window.pcs
                    : [];


            const all = [

                ...phones.map(
                    item => ({
                        ...item,
                        category: "Celular"
                    })
                ),

                ...pcs.map(
                    item => ({
                        ...item,
                        category: "PC"
                    })
                )

            ];


            const found =
                all.filter(item => {

                    const text = `
                        ${item.nome || ""}
                        ${item.marca || ""}
                        ${item.processador || ""}
                        ${item.gpu || ""}
                    `.toLowerCase();

                    return text.includes(term);

                }).slice(0, 8);


            if (!found.length) {

                results.innerHTML = `
                    <div class="search-hint">
                        Nenhum dispositivo encontrado.
                    </div>
                `;

                return;

            }


            found.forEach(item => {

                const link =
                    item.category === "Celular"
                        ? "celulares.html"
                        : "pcs.html";


                const card =
                    document.createElement("a");


                card.className =
                    "search-result";


                card.href = link;


                card.innerHTML = `

                    <span class="search-result-icon">
                        ${
                            item.category === "Celular"
                                ? "📱"
                                : "🖥️"
                        }
                    </span>

                    <span>

                        <strong>
                            ${item.nome}
                        </strong>

                        <small>
                            ${item.marca || ""}
                            •
                            ${item.processador || ""}
                        </small>

                    </span>

                `;


                results.appendChild(card);

            });

        }


        button.addEventListener(
            "click",
            execute
        );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {
                    execute();
                }

            }
        );

    }


    setupMenu();
    setupYear();
    searchHome();


})();
