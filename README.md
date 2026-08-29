<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CelularRank-Official</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --blue-900: #0a1628;
            --blue-800: #0f2341;
            --blue-700: #163a66;
            --blue-600: #1e4d8c;
            --blue-500: #2563eb;
            --blue-400: #3b82f6;
            --blue-300: #60a5fa;
            --accent: #38bdf8;
            --white: #ffffff;
            --gray-300: #cbd5e1;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--blue-900);
            color: var(--white);
            min-height: 100vh;
            line-height: 1.6;
        }

        /* Header */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 5%;
            background: rgba(10, 22, 40, 0.95);
            backdrop-filter: blur(12px);
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid rgba(59, 130, 246, 0.25);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-weight: 700;
            font-size: 1.35rem;
        }

        .logo-icon {
            font-size: 1.7rem;
        }

        .official {
            color: var(--accent);
            font-weight: 500;
            font-size: 0.9rem;
            margin-left: 4px;
        }

        .nav {
            display: flex;
            gap: 2rem;
        }

        .nav a {
            color: var(--gray-300);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s;
        }

        .nav a:hover {
            color: var(--accent);
        }

        /* Hero */
        .hero {
            padding: 6rem 5% 5rem;
            text-align: center;
            background: linear-gradient(180deg, var(--blue-800) 0%, var(--blue-900) 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -40%;
            left: 50%;
            transform: translateX(-50%);
            width: 900px;
            height: 900px;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, transparent 70%);
            pointer-events: none;
        }

        .hero-content {
            position: relative;
            max-width: 780px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: clamp(2.3rem, 5vw, 3.5rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.3rem;
        }

        .highlight {
            background: linear-gradient(90deg, var(--blue-300), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.15rem;
            color: var(--gray-300);
            max-width: 540px;
            margin: 0 auto 2.6rem;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 0.95rem 1.9rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.25s ease;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--blue-500);
            color: white;
            box-shadow: 0 4px 22px rgba(37, 99, 235, 0.45);
        }

        .btn-primary:hover {
            background: var(--blue-400);
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(37, 99, 235, 0.55);
        }

        .btn-secondary {
            background: transparent;
            color: var(--blue-300);
            border: 2px solid var(--blue-500);
        }

        .btn-secondary:hover {
            background: rgba(37, 99, 235, 0.18);
            border-color: var(--accent);
            color: var(--accent);
        }

        /* Categories - Celular e PC */
        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 4rem 5%;
            max-width: 1050px;
            margin: 0 auto;
        }

        .category-card {
            background: linear-gradient(160deg, var(--blue-800), var(--blue-700));
            border-radius: 22px;
            padding: 2.6rem 2.1rem;
            border: 1px solid rgba(59, 130, 246, 0.28);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .category-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--blue-400), var(--accent));
        }

        .category-card:hover {
            transform: translateY(-10px);
            border-color: var(--blue-400);
            box-shadow: 0 22px 45px rgba(0, 0, 0, 0.35);
        }

        .card-icon {
            font-size: 3.2rem;
            margin-bottom: 1.3rem;
        }

        .category-card h2 {
            font-size: 1.9rem;
            margin-bottom: 0.9rem;
            font-weight: 700;
        }

        .category-card p {
            color: var(--gray-300);
            margin-bottom: 1.6rem;
            font-size: 1rem;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
            margin-bottom: 1.9rem;
        }

        .tags span {
            background: rgba(37, 99, 235, 0.28);
            color: var(--blue-300);
            padding: 0.4rem 0.95rem;
            border-radius: 50px;
            font-size: 0.82rem;
            font-weight: 500;
        }

        .card-link {
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.98rem;
            transition: color 0.2s;
        }

        .card-link:hover {
            color: white;
        }

        /* Critérios */
        .criteria {
            padding: 5rem 5%;
            background: var(--blue-800);
            text-align: center;
        }

        .criteria h2 {
            font-size: 2.1rem;
            margin-bottom: 3.2rem;
            font-weight: 700;
        }

        .criteria-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 1.8rem;
            max-width: 980px;
            margin: 0 auto;
        }

        .criterion {
            background: var(--blue-900);
            padding: 2.1rem 1.5rem;
            border-radius: 18px;
            border: 1px solid rgba(59, 130, 246, 0.18);
            transition: all 0.25s ease;
        }

        .criterion:hover {
            border-color: var(--blue-400);
            transform: translateY(-5px);
        }

        .criterion-icon {
            font-size: 2.3rem;
            margin-bottom: 1rem;
        }

        .criterion h3 {
            font-size: 1.25rem;
            margin-bottom: 0.6rem;
            font-weight: 600;
        }

        .criterion p {
            color: var(--gray-300);
            font-size: 0.92rem;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2.2rem;
            color: var(--gray-300);
            font-size: 0.9rem;
            border-top: 1px solid rgba(59, 130, 246, 0.18);
        }

        /* Responsivo */
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                gap: 1rem;
                padding: 1rem 5%;
            }

            .nav {
                gap: 1.3rem;
                flex-wrap: wrap;
                justify-content: center;
            }

            .hero {
                padding: 4.5rem 5% 3.8rem;
            }

            .categories {
                padding: 3rem 5%;
            }
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header class="header">
        <div class="logo">
            <span class="logo-icon">📱</span>
            <span>CelularRank<span class="official">Official</span></span>
        </div>
        <nav class="nav">
            <a href="#celular">Celular</a>
            <a href="#pc">PC</a>
            <a href="#criterios">Critérios</a>
        </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-content">
            <h1>O ranking definitivo de<br><span class="highlight">Celulares e PCs</span></h1>
            <p>Compare desempenho, qualidade, jogos e produtividade com base em dados reais.</p>
            <div class="hero-buttons">
                <a href="#celular" class="btn btn-primary">Ver Celulares</a>
                <a href="#pc" class="btn btn-secondary">Ver PCs</a>
            </div>
        </div>
    </section>

    <!-- Duas categorias principais -->
    <section class="categories">
        <!-- Celular -->
        <div class="category-card" id="celular">
            <div class="card-icon">📱</div>
            <h2>Celular</h2>
            <p>Smartphones analisados em desempenho, câmera, bateria e custo-benefício.</p>
            <div class="tags">
                <span>Desempenho</span>
                <span>Qualidade</span>
                <span>Jogos</span>
                <span>Trabalho</span>
            </div>
            <a href="#" class="card-link">Explorar ranking →</a>
        </div>

        <!-- PC -->
        <div class="category-card" id="pc">
            <div class="card-icon">💻</div>
            <h2>PC</h2>
            <p>Notebooks e desktops avaliados para games, produtividade e custo-benefício.</p>
            <div class="tags">
                <span>Desempenho</span>
                <span>Qualidade</span>
                <span>Jogos</span>
                <span>Trabalho</span>
            </div>
            <a href="#" class="card-link">Explorar ranking →</a>
        </div>
    </section>

    <!-- Critérios -->
    <section class="criteria" id="criterios">
        <h2>O que avaliamos</h2>
        <div class="criteria-grid">
            <div class="criterion">
                <div class="criterion-icon">⚡</div>
                <h3>Desempenho</h3>
                <p>Processador, RAM, GPU e benchmarks reais.</p>
            </div>
            <div class="criterion">
                <div class="criterion-icon">✨</div>
                <h3>Qualidade</h3>
                <p>Construção, tela, acabamento e durabilidade.</p>
            </div>
            <div class="criterion">
                <div class="criterion-icon">🎮</div>
                <h3>Jogos</h3>
                <p>FPS, estabilidade térmica e experiência em games.</p>
            </div>
            <div class="criterion">
                <div class="criterion-icon">💼</div>
                <h3>Trabalho</h3>
                <p>Produtividade, bateria e performance profissional.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>© 2026 CelularRank-Official — Ranking imparcial e atualizado</p>
    </footer>

</body>
</html>
