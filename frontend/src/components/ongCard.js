// --> Variables <-- // 

// Data
const dadosOngsResponse = await fetch("src/data/ongsData.json");
const dadosOngs = await dadosOngsResponse.json();

// Public
export let currentOngs = [0, 1, 2, 3, 4];

// Text
const tagsTexto = {
	"acolhimento": "🤝 Acolhimento",
	"animais": "🐾 Animais",
	"comunidade": "🏘️ Comunidade",
	"criancas": "👧 Crianças",
	"desenvolvimento": "🚀 Desenvolvimento Pessoal",
	"desenvolvimentoSocial": "🌍 Desenvolvimento Social",
	"deficientes": "♿ Deficientes",
	"mulheres": "👩 Mulheres"
}



// --> Functions <-- //
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
		const tagTexto = tagsTexto[etiqueta];

		span.className = "etiqueta";
		span.textContent = tagTexto;

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

export function updateCurrentOngs(first, second, third, fourth, fifth) {
	currentOngs = [first, second, third, fourth, fifth]
	updateAllCards()
}

export function Initialize() {
	updateAllCards()
}
