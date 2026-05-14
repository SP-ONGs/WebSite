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

  function bottaoNovo() {
    
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
      if (name) {''
        card.style.display = name.textContent.toLowerCase().includes(val) ? '' : 'none';
      }
    });
  });