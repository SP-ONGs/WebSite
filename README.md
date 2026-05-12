# WebSite


<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SP ONGS</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #f0f4f8;
      color: #222;
      min-height: 100vh;
    }

    header {
      background: #fff;
      padding: 18px 32px 12px;
      display: flex;
      align-items: center;
      gap: 14px;
      border-bottom: 1px solid #e0e0e0;
    }

    .icone-logo {
      width: 54px;
      height: 54px;
    }

    header h1 {
      font-size: 2.4rem;
      font-weight: 800;
      color: #1a8fd1;
      letter-spacing: 1px;
    }

    .layout-principal {
      display: flex;
      gap: 0;
      padding: 24px 32px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: flex-start;
    }

    .coluna-esquerda {
      flex: 1;
      min-width: 0;
    }

    .barra-pesquisa {
      display: flex;
      align-items: center;
      gap: 0;
      background: #fff;
      border: 1.5px solid #c8d6e5;
      border-radius: 8px;
      padding: 0 10px;
      margin-bottom: 18px;
      height: 46px;
    }

    .barra-pesquisa input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      color: #555;
      background: transparent;
      padding: 0 8px;
    }

    .barra-pesquisa .icone-busca {
      color: #888;
      font-size: 1.2rem;
      margin-right: 4px;
    }

    .separador-pesquisa {
      width: 1.5px;
      height: 26px;
      background: #c8d6e5;
      margin: 0 8px;
    }

    .botao-filtrar {
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      color: #333;
      font-size: 0.97rem;
      font-weight: 500;
      padding: 0 6px;
      transition: color 0.2s;
    }
    .botao-filtrar:hover { color: #1a8fd1; }

    .botao-localizacao {
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      color: #1a8fd1;
      font-size: 0.97rem;
      font-weight: 500;
      padding: 0 6px;
      transition: color 0.2s;
    }
    .botao-localizacao:hover { color: #1261a0; }

    .cartao-ong {
      background: #fff;
      border: 1.5px solid #dde6f0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      margin-bottom: 10px;
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .cartao-ong:hover {
      box-shadow: 0 4px 18px rgba(26,143,209,0.10);
      border-color: #1a8fd1;
    }

    .cartao-ong.esqueleto {
      min-height: 72px;
      background: #e8eef5;
      border-color: #dde6f0;
      pointer-events: none;
    }

    .imagem-ong {
      width: 58px;
      height: 58px;
      border-radius: 6px;
      object-fit: cover;
      flex-shrink: 0;
      background: #c8d6e5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .info-ong {
      flex: 1;
      min-width: 0;
    }

    .nome-ong {
      font-size: 1.05rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 3px;
    }

    .endereco-ong {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.82rem;
      color: #666;
      margin-bottom: 7px;
    }

    .etiquetas-ong {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .etiqueta {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #e8eef5;
      border: 1px solid #c8d6e5;
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 0.78rem;
      color: #444;
    }

    .botao-acessar {
      background: #1a8fd1;
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      font-size: 0.97rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .botao-acessar:hover { background: #1261a0; }

    .paginacao {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 18px;
      font-size: 0.97rem;
    }

    .paginacao a, .paginacao span {
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: #1a8fd1;
      transition: background 0.15s;
    }
    .paginacao a:hover { background: #e0f0fa; }
    .paginacao .ativo { font-weight: 700; color: #222; }
    .paginacao .botao-nav {
      color: #666;
      font-size: 1.1rem;
    }

    .coluna-direita {
      width: 340px;
      flex-shrink: 0;
      margin-left: 24px;
    }

    .caixa-info {
      background: #1a8fd1;
      border-radius: 8px 8px 0 0;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .caixa-info-esquerda {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .caixa-info strong {
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .caixa-info a {
      color: #fff;
      font-size: 0.9rem;
      text-decoration: underline;
      cursor: pointer;
    }

    .linha-mapa {
      background: #1a8fd1;
      padding: 6px 18px 12px;
      border-radius: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .linha-mapa span {
      color: #fff;
      font-size: 0.97rem;
      font-weight: 500;
    }

    .interruptor {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
      cursor: pointer;
    }
    .interruptor input { display: none; }
    .deslizador {
      position: absolute;
      inset: 0;
      background: #a0cde8;
      border-radius: 24px;
      transition: background 0.2s;
    }
    .deslizador::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      left: 3px;
      top: 3px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.2s;
    }
    .interruptor input:checked + .deslizador { background: #0a6ea8; }
    .interruptor input:checked + .deslizador::before { transform: translateX(20px); }

    .area-mapa {
      background: #c8d0d8;
      border-radius: 0 0 8px 8px;
      min-height: 340px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 14px;
      color: #555;
    }

    .area-mapa.ativo {
      background: #d0e8d0;
    }

    .texto-mapa-desativado {
      font-size: 1.5rem;
      font-weight: 800;
      color: #666;
      letter-spacing: 1px;
      text-align: center;
    }

    .icone-mapa-desativado {
      font-size: 2.8rem;
      color: #999;
      opacity: 0.7;
    }

    svg.icon { vertical-align: middle; }
  </style>
</head>
<body>

<header>
  <img src="SPONGs_icon.jpg" class="icone-logo" alt="SP ONGS Logo">
  <h1>SP ONGS</h1>
</header>

<div class="layout-principal">

  <div class="coluna-esquerda">

    <div class="barra-pesquisa">

<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQ4MCAyNzJDNDgwIDMxNy45IDQ2NS4xIDM2MC4zIDQ0MCAzOTQuN0w1NjYuNiA1MjEuNEM1NzkuMSA1MzMuOSA1NzkuMSA1NTQuMiA1NjYuNiA1NjYuN0M1NTQuMSA1NzkuMiA1MzMuOCA1NzkuMiA1MjEuMyA1NjYuN0wzOTQuNyA0NDBDMzYwLjMgNDY1LjEgMzE3LjkgNDgwIDI3MiA0ODBDMTU3LjEgNDgwIDY0IDM4Ni45IDY0IDI3MkM2NCAxNTcuMSAxNTcuMSA2NCAyNzIgNjRDMzg2LjkgNjQgNDgwIDE1Ny4xIDQ4MCAyNzJ6TTI3MiA0MTZDMzUxLjUgNDE2IDQxNiAzNTEuNSA0MTYgMjcyQzQxNiAxOTIuNSAzNTEuNSAxMjggMjcyIDEyOEMxOTIuNSAxMjggMTI4IDE5Mi41IDEyOCAyNzJDMTI4IDM1MS41IDE5Mi41IDQxNiAyNzIgNDE2eiIvPjwvc3ZnPg==" width="18" height="18" style="filter: invert(40%) sepia(60%) saturate(500%) hue-rotate(175deg); display:block;" alt="busca">
      <input type="text" placeholder="Pesquise o nome da ONG" id="entrada-pesquisa"/>
      <div class="separador-pesquisa"></div>
      <button class="botao-filtrar" onclick="openFilter()">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTk2IDEyOEM4My4xIDEyOCA3MS40IDEzNS44IDY2LjQgMTQ3LjhDNjEuNCAxNTkuOCA2NC4yIDE3My41IDczLjQgMTgyLjZMMjU2IDM2NS4zTDI1NiA0ODBDMjU2IDQ4OC41IDI1OS40IDQ5Ni42IDI2NS40IDUwMi42TDMyOS40IDU2Ni42QzMzOC42IDU3NS44IDM1Mi4zIDU3OC41IDM2NC4zIDU3My41QzM3Ni4zIDU2OC41IDM4NCA1NTYuOSAzODQgNTQ0TDM4NCAzNjUuM0w1NjYuNiAxODIuN0M1NzUuOCAxNzMuNSA1NzguNSAxNTkuOCA1NzMuNSAxNDcuOEM1NjguNSAxMzUuOCA1NTYuOSAxMjggNTQ0IDEyOEw5NiAxMjh6Ii8+PC9zdmc+" width="16" height="16" style="filter: invert(20%) sepia(10%) saturate(200%) hue-rotate(0deg); display:block;" alt="filtrar">
        Filtrar
      </button>
      <div class="separador-pesquisa"></div>
      <button class="botao-localizacao" onclick="ativarLocalizacao()">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTEyOCAyNTIuNkMxMjggMTQ4LjQgMjE0IDY0IDMyMCA2NEM0MjYgNjQgNTEyIDE0OC40IDUxMiAyNTIuNkM1MTIgMzcxLjkgMzkxLjggNTE0LjkgMzQxLjYgNTY5LjRDMzI5LjggNTgyLjIgMzEwLjEgNTgyLjIgMjk4LjMgNTY5LjRDMjQ4LjEgNTE0LjkgMTI3LjkgMzcxLjkgMTI3LjkgMjUyLjZ6TTMyMCAzMjBDMzU1LjMgMzIwIDM4NCAyOTEuMyAzODQgMjU2QzM4NCAyMjAuNyAzNTUuMyAxOTIgMzIwIDE5MkMyODQuNyAxOTIgMjU2IDIyMC43IDI1NiAyNTZDMjU2IDI5MS4zIDI4NC43IDMyMCAzMjAgMzIweiIvPjwvc3ZnPg==" width="16" height="16" style="filter: invert(40%) sepia(60%) saturate(500%) hue-rotate(175deg); display:block;" alt="localização">
        Ative a sua localização
      </button>
    </div>

    <div class="cartao-ong">
      <div class="imagem-ong" style="background:#e8eef5;"></div>
      <div class="info-ong">
        <div class="nome-ong">Cachorros carentes</div>
        <div class="endereco-ong">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTEyOCAyNTIuNkMxMjggMTQ4LjQgMjE0IDY0IDMyMCA2NEM0MjYgNjQgNTEyIDE0OC40IDUxMiAyNTIuNkM1MTIgMzcxLjkgMzkxLjggNTE0LjkgMzQxLjYgNTY5LjRDMzI5LjggNTgyLjIgMzEwLjEgNTgyLjIgMjk4LjMgNTY5LjRDMjQ4LjEgNTE0LjkgMTI3LjkgMzcxLjkgMTI3LjkgMjUyLjZ6TTMyMCAzMjBDMzU1LjMgMzIwIDM4NCAyOTEuMyAzODQgMjU2QzM4NCAyMjAuNyAzNTUuMyAxOTIgMzIwIDE5MkMyODQuNyAxOTIgMjU2IDIyMC43IDI1NiAyNTZDMjU2IDI5MS4zIDI4NC43IDMyMCAzMjAgMzIweiIvPjwvc3ZnPg==" width="13" height="13" style="filter: invert(40%) sepia(60%) saturate(500%) hue-rotate(175deg);" alt="">
          São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255
        </div>
        <div class="etiquetas-ong">
          <span class="etiqueta">🐾 Animais</span>
          <span class="etiqueta">💰 Doação</span>
          <span class="etiqueta">🤝 Voluntário</span>
        </div>
      </div>
      <button class="botao-acessar">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDcuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjYgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTQ4MCAyNzJDNDgwIDMxNy45IDQ2NS4xIDM2MC4zIDQ0MCAzOTQuN0w1NjYuNiA1MjEuNEM1NzkuMSA1MzMuOSA1NzkuMSA1NTQuMiA1NjYuNiA1NjYuN0M1NTQuMSA1NzkuMiA1MzMuOCA1NzkuMiA1MjEuMyA1NjYuN0wzOTQuNyA0NDBDMzYwLjMgNDY1LjEgMzE3LjkgNDgwIDI3MiA0ODBDMTU3LjEgNDgwIDY0IDM4Ni45IDY0IDI3MkM2NCAxNTcuMSAxNTcuMSA2NCAyNzIgNjRDMzg2LjkgNjQgNDgwIDE1Ny4xIDQ4MCAyNzJ6TTI3MiA0MTZDMzUxLjUgNDE2IDQxNiAzNTEuNSA0MTYgMjcyQzQxNiAxOTIuNSAzNTEuNSAxMjggMjcyIDEyOEMxOTIuNSAxMjggMTI4IDE5Mi41IDEyOCAyNzJDMTI4IDM1MS41IDE5Mi41IDQxNiAyNzIgNDE2eiIvPjwvc3ZnPg==" width="16" height="16" style="filter: brightness(0) invert(1); display:block;" alt="">
        Acessar
      </button>
    </div>

    <div class="cartao-ong esqueleto"></div>
    <div class="cartao-ong esqueleto"></div>
    <div class="cartao-ong esqueleto"></div>
    <div class="cartao-ong esqueleto"></div>

    <div class="paginacao">
      <a class="botao-nav" onclick="changePage(currentPage - 1)">&#8249;</a>
      <a id="pagina-1" class="ativo" onclick="changePage(1)">1</a>
      <a id="pagina-2" onclick="changePage(2)">2</a>
      <a id="pagina-3" onclick="changePage(3)">3</a>
      <a id="pagina-4" onclick="changePage(4)">4</a>
      <a id="pagina-5" onclick="changePage(5)">5</a>
      <span>...</span>
      <a onclick="changePage(50)">50</a>
      <a class="botao-nav" onclick="changePage(currentPage + 1)">&#8250;</a>
    </div>

  </div>

  <div class="coluna-direita">
    <div class="caixa-info">
      <div class="caixa-info-esquerda">
        <strong>QUEM SOMOS NÓS?</strong>
      </div>
      <a href="#" onclick="alert('Página sobre nós')">Clique aqui</a>
    </div>
    <div class="linha-mapa">
      <span>Visualizar mapa</span>
      <label class="interruptor">
        <input type="checkbox" id="interruptor-mapa" onchange="toggleMap()"/>
        <span class="deslizador"></span>
      </label>
    </div>
    <div class="area-mapa" id="area-mapa">
      <div class="icone-mapa-desativado">
        <svg width="56" height="56" fill="none" stroke="#999" stroke-width="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="10" r="3"/>
          <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z"/>
          <line x1="3" y1="3" x2="21" y2="21" stroke="#bbb" stroke-width="2.5"/>
        </svg>
      </div>
      <div class="texto-mapa-desativado" id="texto-status-mapa">MAPA DESATIVADO</div>
    </div>
  </div>

</div>

<script>
  let currentPage = 1;

  function changePage(page) {
    if (page < 1 || page > 50) return;

    const old = document.getElementById('pagina-' + currentPage);
    if (old) { old.classList.remove('ativo'); old.style.fontWeight = ''; old.style.color = '#1a8fd1'; }
    currentPage = page;
    const curr = document.getElementById('pagina-' + currentPage);
    if (curr) { curr.classList.add('ativo'); curr.style.color = '#222'; }
  }

  function openFilter() {
    alert('Pablo e Nardy: o melhor casal de 2026! <3');
  }

  function ativarLocalizacao() {
    if (!navigator.geolocation) {
      alert('Geolocalização não suportada neste navegador.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      function(pos) {
        alert('Localização ativada!\nLat: ' + pos.coords.latitude.toFixed(4) + '\nLng: ' + pos.coords.longitude.toFixed(4));
      },
      function() {
        alert('Não foi possível obter a localização. Verifique as permissões do navegador.');
      }
    );
  }

  function toggleMap() {
    const toggle = document.getElementById('interruptor-mapa');
    const mapArea = document.getElementById('area-mapa');
    const statusText = document.getElementById('texto-status-mapa');

    if (toggle.checked) {
      mapArea.classList.add('ativo');
      mapArea.innerHTML = `
        <div style="font-size:2.5rem;">🗺️</div>
        <div style="font-size:1.1rem;font-weight:700;color:#2a7a2a;text-align:center;">MAPA ATIVADO<br><span style="font-size:0.85rem;font-weight:400;color:#555;">Ative a localização para ver ONGs próximas.</span></div>
      `;
    } else {
      mapArea.classList.remove('ativo');
      mapArea.innerHTML = `
        <div class="icone-mapa-desativado">
          <svg width="56" height="56" fill="none" stroke="#999" stroke-width="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z"/>
            <line x1="3" y1="3" x2="21" y2="21" stroke="#bbb" stroke-width="2.5"/>
          </svg>
        </div>
        <div class="texto-mapa-desativado">MAPA DESATIVADO</div>
      `;
    }
  }

  document.getElementById('entrada-pesquisa').addEventListener('input', function() {
    const val = this.value.toLowerCase();
    const cards = document.querySelectorAll('.cartao-ong:not(.esqueleto)');
    cards.forEach(card => {
      const name = card.querySelector('.nome-ong');
      if (name) {
        card.style.display = name.textContent.toLowerCase().includes(val) ? '' : 'none';
      }
    });
  });
</script>

</body>
</html>

