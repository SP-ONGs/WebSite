let currentPage = 1;

function changePage(page) {

  if (page < 1 || page > 50) return;

  // remove ativo de todos
  const paginas = document.querySelectorAll('.paginacao a');

  paginas.forEach(link => {
    link.classList.remove('ativo');
  });

  // atualiza página atual
  currentPage = page;

  // adiciona ativo na página clicada
  const curr = document.getElementById(`pagina-${currentPage}`);

  if (curr) {
    curr.classList.add('ativo');
  }
}

function toggleFiltro() {

  const menu = document.getElementById('menu-filtro');

  menu.classList.toggle('ativo');
}

function filtrarCategoria(categoria) {

  const cards = document.querySelectorAll('.cartao-ong');

  cards.forEach(card => {

    const categoriaCard = card.dataset.categoria || '';

    if (
      categoria === 'todas' ||
      categoriaCard.includes(categoria)
    ) {

      card.style.display = '';

    } else {

      card.style.display = 'none';
    }

  });

  document
    .getElementById('menu-filtro')
    .classList.remove('ativo');
}

function ativarLocalizacao() {

  if (!navigator.geolocation) {
    alert('Geolocalização não suportada neste navegador.');
    return;
  }

  navigator.geolocation.getCurrentPosition(

    function(pos) {

      alert(
        'Localização ativada!\n' +
        'Lat: ' + pos.coords.latitude.toFixed(4) +
        '\nLng: ' + pos.coords.longitude.toFixed(4)
      );

    },

    function() {
      alert('Não foi possível obter a localização. Verifique as permissões do navegador.');
    }

  );
}

// MAPA COM LEAFLET AQUI PABLO 

let mapa;
let mapaInicializado = false;

function toggleMap() {

  const toggle = document.getElementById('interruptor-mapa');

  const mapaElemento = document.getElementById('mapa-leaflet');

  const placeholder = document.getElementById('placeholder-mapa');

  if (toggle.checked) {

    mapaElemento.style.display = 'block';

    placeholder.style.display = 'none';

    if (!mapaInicializado) {

      mapa = L.map('mapa-leaflet').setView(
        [-23.55052, -46.633308],
        11
      );

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; OpenStreetMap'
        }
      ).addTo(mapa);

      mapaInicializado = true;

      // marcador exemplo 1 aqui 
      L.marker([-23.55052, -46.633308])
        .addTo(mapa)
        .bindPopup('Ong 1')
        .openPopup();

         L.marker([-23.52392, -46.6332343])
        .addTo(mapa)
        .bindPopup('Ong 2')
        .openPopup();
        
         L.marker([-23.53232, -46.6222])
        .addTo(mapa)
        .bindPopup('Ong 3')
        .openPopup();
    }
    setTimeout(() => {
      mapa.invalidateSize();
    }, 100);

  } else {

    mapaElemento.style.display = 'none';

    placeholder.style.display = 'flex';
  }
}

