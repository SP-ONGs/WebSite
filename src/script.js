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

<<<<<<< HEAD
=======

/* MODAL DAS ONGS */

const dadosOngs = {
  "cachorros-carentes": {
    nome: "Cachorros carentes",
    imagem: "src/imagens/cachorroparamodal.webp",
    endereco: "São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255",
    etiquetas: ["🐾 Animais", "💰 Doação", "🤝 Voluntário"],
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999",
    website: "https://google.com"
  },

  "mulheres-carentes": {
    nome: "Cachorros carentes",
    imagem: "src/imagens/cachorroparamodal.webp",
    endereco: "São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255",
    etiquetas: ["👩 Mulheres", "💰 Doação", "🤝 Voluntário"],
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999",
    website: "https://google.com"
  },

  "comunidade-carentes": {
    nome: "Cachorros carentes",
    imagem: "src/imagens/cachorroparamodal.webp",
    endereco: "São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255",
    etiquetas: ["🏘️ Comunidade", "💰 Doação", "🤝 Voluntário"],
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999",
    website: "https://google.com"
  },

  "animais-carentes-2": {
    nome: "Cachorros carentes",
    imagem: "src/imagens/cachorroparamodal.webp",
    endereco: "São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255",
    etiquetas: ["🐾 Animais", "💰 Doação", "🤝 Voluntário"],
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999",
    website: "https://google.com"
  },

  "acolhimento-carentes": {
    nome: "Chachorros carente",
    imagem: "src/imagens/cachorroparamodal.webp",
    endereco: "São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255",
    etiquetas: ["🤝 Acolhimento", "💰 Doação", "🤝 Voluntário"],
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/5511999999999",
    website: "https://google.com"
  }
};

const modalOng = document.getElementById("modalOng");
const fecharModal = document.getElementById("fecharModal");

const modalNome = document.getElementById("modalNome");
const modalImagem = document.getElementById("modalImagem");
const modalEndereco = document.getElementById("modalEndereco");
const modalEtiquetas = document.getElementById("modalEtiquetas");

const modalInstagram = document.getElementById("modalInstagram");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalWebsite = document.getElementById("modalWebsite");

function configurarLinkModal(elemento, url) {
  if (!elemento) return;

  if (url && url.trim() !== "#") {
    elemento.href = url;
    elemento.style.display = "flex";
  } else {
    elemento.href = "#";
    elemento.style.display = "none";
  }
}

function abrirModalOng(chaveOng) {
  if (!modalOng) return;

  const dados = dadosOngs[chaveOng];

  if (!dados) return;

  modalNome.textContent = dados.nome;
  modalEndereco.textContent = dados.endereco;

  modalImagem.classList.remove("sem-imagem");
  modalImagem.src = dados.imagem;
  modalImagem.alt = `Imagem da ONG ${dados.nome}`;

  modalImagem.onerror = function() {
    modalImagem.removeAttribute("src");
    modalImagem.classList.add("sem-imagem");
  };

  modalEtiquetas.innerHTML = "";

  dados.etiquetas.forEach(function(etiqueta) {
    const span = document.createElement("span");
    span.classList.add("modal-etiqueta");
    span.textContent = etiqueta;
    modalEtiquetas.appendChild(span);
  });

  configurarLinkModal(modalInstagram, dados.instagram);
  configurarLinkModal(modalWhatsapp, dados.whatsapp);
  configurarLinkModal(modalWebsite, dados.website);

  modalOng.classList.add("ativo");
  modalOng.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

function fecharModalOng() {
  if (!modalOng) return;

  modalOng.classList.remove("ativo");
  modalOng.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

const botoesAcessar = document.querySelectorAll(".botao-acessar[data-ong]");

botoesAcessar.forEach(function(botao) {
  botao.addEventListener("click", function() {
    const chaveOng = botao.getAttribute("data-ong");
    abrirModalOng(chaveOng);
  });
});

if (fecharModal) {
  fecharModal.addEventListener("click", fecharModalOng);
}

if (modalOng) {
  modalOng.addEventListener("click", function(evento) {
    if (evento.target === modalOng) {
      fecharModalOng();
    }
  });
}

document.addEventListener("keydown", function(evento) {
  if (evento.key === "Escape") {
    fecharModalOng();
  }
});

>>>>>>> cddf29c (modal + botão acessar e voltar funcionando)
