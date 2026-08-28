# CelularRank-Official
<!DOCTYPE html>
/* ========================================
   CELULARRANK-OFFICIAL
   TEMA AZUL
======================================== */

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #061326;
    color: #ffffff;
    line-height: 1.6;
}


/* ========================================
   HEADER
======================================== */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;

    width: 100%;
    padding: 18px 7%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(5, 18, 38, 0.95);
    border-bottom: 1px solid #12345d;

    backdrop-filter: blur(12px);
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.logo span {
    color: #1683ff;
}

nav {
    display: flex;
    gap: 28px;
}

nav a {
    color: #b9cbe2;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
}

nav a:hover {
    color: #1683ff;
}


/* ========================================
   HERO / INÍCIO
======================================== */

.hero {
    min-height: 680px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 90px 7%;

    text-align: center;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(0, 119, 255, 0.28),
            transparent 45%
        ),
        linear-gradient(
            180deg,
            #071a35 0%,
            #061326 100%
        );
}

.hero-content {
    width: 100%;
    max-width: 950px;
}


/* ========================================
   BADGE
======================================== */

.badge {
    display: inline-block;

    padding: 9px 17px;
    margin-bottom: 22px;

    border: 1px solid #155aa3;
    border-radius: 50px;

    background: rgba(16, 104, 190, 0.12);

    color: #53aaff;

    font-size: 14px;
    font-weight: 700;

    box-shadow: 0 0 25px rgba(0, 119, 255, 0.08);
}


/* ========================================
   TÍTULO
======================================== */

.hero h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;

    letter-spacing: -2px;

    margin-bottom: 25px;
}

.hero h1 span {
    display: block;

    color: #1683ff;

    text-shadow:
        0 0 30px rgba(22, 131, 255, 0.25);
}

.hero p {
    max-width: 700px;

    margin: 0 auto;

    color: #a9bdd5;

    font-size: 18px;
}


/* ========================================
   PESQUISA
======================================== */

.search-box {
    max-width: 800px;

    margin: 38px auto 20px;

    display: flex;
    align-items: center;

    padding: 7px;

    background: #0b203b;

    border: 1px solid #1b4e83;

    border-radius: 15px;

    box-shadow:
        0 15px 45px rgba(0, 0, 0, 0.25),
        0 0 30px rgba(0, 119, 255, 0.08);
}

.search-box:focus-within {
    border-color: #1683ff;

    box-shadow:
        0 0 0 3px rgba(22, 131, 255, 0.12),
        0 15px 45px rgba(0, 0, 0, 0.25);
}

.search-box input {
    flex: 1;

    min-width: 0;

    padding: 17px;

    border: none;
    outline: none;

    background: transparent;

    color: #ffffff;

    font-size: 16px;
}

.search-box input::placeholder {
    color: #7189a5;
}

.search-box button {
    padding: 15px 25px;

    border: none;
    border-radius: 11px;

    background: #1683ff;

    color: #ffffff;

    font-size: 15px;
    font-weight: 800;

    cursor: pointer;

    transition: 0.2s;

    box-shadow:
        0 8px 20px rgba(22, 131, 255, 0.22);
}

.search-box button:hover {
    background: #3194ff;

    transform: translateY(-2px);
}


/* ========================================
   CATEGORIAS
======================================== */

.categories {
    display: flex;

    justify-content: center;

    gap: 12px;

    flex-wrap: wrap;

    margin-top: 18px;
}

.categories button {
    padding: 12px 20px;

    border: 1px solid #1c4771;
    border-radius: 11px;

    background: #0b1e35;

    color: #c8d8eb;

    font-weight: 700;

    cursor: pointer;

    transition: 0.2s;
}

.categories button:hover {
    background: #0e3158;

    border-color: #1683ff;

    color: #ffffff;

    transform: translateY(-2px);
}


/* ========================================
   PRODUTOS
======================================== */

.products-section {
    padding: 95px 7%;

    background: #081a31;

    border-top: 1px solid #0d2a4b;
}

.section-title {
    text-align: center;

    margin-bottom: 48px;
}

.section-title span {
    color: #1683ff;

    font-size: 13px;

    font-weight: 800;

    letter-spacing: 1.5px;
}

.section-title h2 {
    margin: 8px 0;

    font-size: clamp(30px, 5vw, 42px);
}

.section-title p {
    color: #8fa8c4;
}


/* ========================================
   CARDS
======================================== */

.products-grid {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(280px, 1fr));

    gap: 22px;
}

.product-card {
    padding: 25px;

    background:
        linear-gradient(
            145deg,
            #0d2747,
            #0a1c32
        );

    border: 1px solid #19456f;

    border-radius: 18px;

    transition: 0.25s;
}

.product-card:hover {
    transform: translateY(-6px);

    border-color: #1683ff;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25),
        0 0 25px rgba(22, 131, 255, 0.08);
}

.product-type {
    color: #53aaff;

    font-size: 13px;

    font-weight: 800;
}

.product-card h3 {
    margin: 8px 0 20px;

    font-size: 22px;
}

.score {
    display: flex;

    justify-content: space-between;

    padding: 11px 0;

    border-bottom: 1px solid #183652;

    color: #a8bbd0;
}

.score strong {
    color: #ffffff;
}

.cost {
    margin-top: 18px;

    padding: 13px;

    border-radius: 11px;

    background: #092d49;

    border: 1px solid #14547e;

    color: #57c6ff;

    font-weight: 800;
}

.buy-button {
    width: 100%;

    margin-top: 18px;

    padding: 14px;

    border: none;

    border-radius: 11px;

    background: #1683ff;

    color: #ffffff;

    font-weight: 800;

    cursor: pointer;

    transition: 0.2s;
}

.buy-button:hover {
    background: #3194ff;

    transform: translateY(-2px);
}

.no-results {
    grid-column: 1 / -1;

    padding: 50px;

    text-align: center;

    color: #8fa8c4;
}


/* ========================================
   COMO FUNCIONA
======================================== */

.how-section {
    padding: 95px 7%;

    background: #061326;
}

.features {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 20px;
}

.feature {
    padding: 30px;

    text-align: center;

    background: #0a1d34;

    border: 1px solid #173b60;

    border-radius: 18px;

    transition: 0.2s;
}

.feature:hover {
    border-color: #1683ff;

    transform: translateY(-4px);
}

.feature-icon {
    width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin: 0 auto 17px;

    border-radius: 16px;

    background: #0c3158;

    font-size: 30px;
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #8fa8c4;
}


/* ========================================
   FOOTER
======================================== */

footer {
    padding: 55px 7%;

    text-align: center;

    background: #030b16;

    border-top: 1px solid #102b49;

    color: #7f95ad;
}

footer .logo {
    color: #ffffff;

    margin-bottom: 8px;
}

footer small {
    display: block;

    margin-top: 20px;

    color: #60758d;
}


/* ========================================
   RESPONSIVIDADE
======================================== */

@media (max-width: 700px) {

    .header {
        padding: 15px 5%;
    }

    nav {
        display: none;
    }

    .hero {
        min-height: 620px;

        padding: 65px 5%;
    }

    .hero h1 {
        font-size: 44px;

        letter-spacing: -1.5px;
    }

    .hero p {
        font-size: 16px;
    }

    .search-box {
        flex-direction: column;

        gap: 7px;

        padding: 7px;
    }

    .search-box input {
        width: 100%;

        padding: 15px;
    }

    .search-box button {
        width: 100%;
    }

    .products-section,
    .how-section {
        padding: 70px 5%;
    }

    .section-title h2 {
        font-size: 30px;
    }

    .categories button {
        flex: 1;

        min-width: 140px;
    }
}
