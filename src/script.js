const dadosOngs = [
	{
		nome: "ABC Aurora",
		endereco: "Rua Caxinguelê, 648",
		email: "abcaurora@abcaurora.org.br",
		whatsapp: "11 2049-2934",
		instagram: "abcaurora",
		website: "https://www.abcaurora.org.br/",
		etiquetas: ["👧 Crianças"],
		imagem: "src/imagens/ONGs/abc_aurora.png"
	},
	{
		nome: "Centro Social Santo Estevão",
		endereco: "Rua Jaborandi, 621",
		email: "centrosocialsantoestevao@hotmail.com",
		whatsapp: "11 2642-7395",
		instagram: "centrosocialsantoestevao",
		website: "https://www.atados.com.br/ong/centro-social-santo-estevao",
		etiquetas: ["👧 Crianças"],
		imagem: "src/imagens/ONGs/centro_social_santo_estevao.jpg"
	},
	{
		nome: "Casa de Apoio ao Cidadão",
		endereco: "Av. Oliveira Freire, 1587",
		email: "departamento_rh@caci.ong.br",
		whatsapp: "11 3476-0623",
		instagram: "casaapoiocidadao",
		website: "https://www.atados.com.br/ong/caci-casa-de-apoio-ao-cidadao-383136",
		etiquetas: ["🤝 Acolhimento"],
		imagem: "src/imagens/ONGs/casa_de_apoio_ao_cidado.png"
	},
	{
		nome: "Anjos da Leste",
		endereco: "Rua Major Basílio, 644",
		email: "anjosdaleste@gmail.com",
		whatsapp: "11 95052-2407",
		instagram: "anjosdaleste",
		website: "https://www.anjosdaleste.org.br/",
		etiquetas: ["🤝 Acolhimento"],
		imagem: "src/imagens/ONGs/anjos_da_leste.png"
	},
	{
		nome: "Zl Somos Nós",
		endereco: "Rua Dr. zacarias Colaço Filho, 45",
		email: "marcosalves@zonalestesomos.com.br",
		whatsapp: "11 94788-7744",
		instagram: "zlsn_noticias",
		website: "https://zlsn.com.br/",
		etiquetas: ["🌍 Desenvolvimento Social"],
		imagem: "src/imagens/ONGs/zl_somo_nos.jpg"
	},
	{
		nome: "Mooca Solidaria",
		endereco: "Rua Major Basílio, 644",
		email: "contato@moocasolidaria.org",
		whatsapp: "11 94848-7269",
		instagram: "moocasolidaria",
		website: "https://moocasolidaria.org/",
		etiquetas: ["🤝 Acolhimento"],
		imagem: "src/imagens/ONGs/mooca_solidaria.jpg"
	},
	{
		nome: "Casa do Cristo Redentor",
		endereco: "Rua Agrimensor Sugaya, 986",
		email: "criacao@casadocristo.org.br",
		whatsapp: "11 3058-6211",
		instagram: "",
		website: "https://casadocristo.org.br/contato/",
		etiquetas: ["🤝 Acolhimento"],
		imagem: "src/imagens/ONGs/casa_do_cristo_redentor.jpg"
	},
	{
		nome: "Núcleo Assistencial Fraterno",
		endereco: "Rua Dentista Barreto, 978",
		email: "contato@fraterno.com.br",
		whatsapp: "11 2296-3462",
		instagram: "nucleoassistencialfraterno",
		website: "https://fraterno.org.br/",
		etiquetas: ["🤝 Acolhimento"],
		imagem: "src/imagens/ONGs/nucleo_assistencial_fraternal.jpg"
	},
	{
		nome: "Ação Comunitária Paroquial do Jardim Colonial",
		endereco: "Rua Lorenzo Penha, 350",
		email: "",
		whatsapp: "11 2734-3761",
		instagram: "",
		website: "https://acaocomunitaria.org.br/",
		etiquetas: ["🧒 Crianças"],
		imagem: "src/imagens/ONGs/acao_comunitaria_paroquial.jpg"
	},
	{
		nome: "Complexo do Bem",
		endereco: "Rua dos Meiros, s/n°",
		email: "",
		whatsapp: "11 98987-9230",
		instagram: "complexodobem",
		website: "https://complexodobem.org/",
		etiquetas: ["🚀 Desenvolvimento Pessoal"],
		imagem: "src/imagens/ONGs/complexo_do_bem.jpg"
	},
	{
		nome: "Instituto LEMDA",
		endereco: "Rua Francisco Zicardi, 420",
		email: "institutolemda@institutolemda.org.br",
		whatsapp: "11 2671-7677",
		instagram: "llemdaoficial",
		website: "https://institutolemda.org.br/",
		etiquetas: ["♿ Deficientes"],
		imagem: "src/imagens/ONGs/instituto_LEMDA.jpg"
	},
]

let currentPage = 1;
let currentOngs = [0,1,2,3,4];

function updateOngCartao(id, ongId) {
	const ong = dadosOngs[ongId];
	const cartao = document.getElementById("ong-cartao" + id);

	if (!cartao) {
		console.error(`Cartão com id "ong-cartao${id}" não encontrado.`);
		return;
	}

	// If ONG does not exist -> transform into grey bar
	if (!ong) {
		cartao.style.background = "#d3d3d3";
		cartao.style.height = "100px";

		cartao.querySelector(".imagem-ong").style.display = "none";
		cartao.querySelector(".info-ong").style.display = "none";
		cartao.querySelector(".botao-acessar").style.display = "none";
		return;
	}

	// Restore normal card style
	cartao.style.background = "#fff";
	cartao.style.height = "";

	cartao.querySelector(".imagem-ong").style.display = "";
	cartao.querySelector(".info-ong").style.display = "";
	cartao.querySelector(".botao-acessar").style.display = "";

	// Image
	const imagem = cartao.querySelector(".imagem-ong");
	imagem.style.backgroundImage = `url("${ong.imagem}")`;
	imagem.style.backgroundSize = "cover";
	imagem.style.backgroundPosition = "center";

	// Nome
	cartao.querySelector(".nome-ong").textContent = ong.nome;

	// Endereço
	cartao.querySelector(".endereco-ong").innerHTML = `
	 <i class="bi bi-geo-alt-fill" style="font-size:13px; color:#4a90e2;"></i>
	 ${ong.endereco}
  `;

	// Etiquetas
	const etiquetasContainer = cartao.querySelector(".etiquetas-ong");

	etiquetasContainer.innerHTML = "";

	ong.etiquetas.forEach((etiqueta) => {
		const span = document.createElement("span");

		span.className = "etiqueta";
		span.textContent = etiqueta;

		etiquetasContainer.appendChild(span);
	});

	// Botão
	const botao = cartao.querySelector(".botao-acessar");

	botao.dataset.ong = ong.nome
		.toLowerCase()
		.replace(/\s+/g, "-");
}

function updateAllCards() {
	updateOngCartao(1, currentOngs[0]);
	updateOngCartao(2, currentOngs[1]);
	updateOngCartao(3, currentOngs[2]);
	updateOngCartao(4, currentOngs[3]);
	updateOngCartao(5, currentOngs[4]);
}

updateAllCards()

function changePage(page) {

	if (page < 1 || page > 50) return;

	const initialIndex = (page - 1) * 5

	currentOngs = [initialIndex, initialIndex + 1, initialIndex + 2, initialIndex + 3, initialIndex + 4];
	updateAllCards()

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

/* MODAL DAS ONGS */
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

function abrirModalOng(cartaoId) {
	if (!modalOng) return;

	const ongId = currentOngs[cartaoId - 1]
	const dados = dadosOngs[ongId];

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
