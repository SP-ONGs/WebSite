// --> Variables <-- //

// Import
import { currentOngs } from "./ongCard.js";

// Data
const dadosOngsResponse = await fetch("src/data/ongsData.json");
const dadosOngs = await dadosOngsResponse.json();

// Elementos-HTML
const modalOng = document.getElementById("modalOng");
const fecharModal = document.getElementById("fecharModal");

const modalNome = document.getElementById("modalNome");
const modalImagem = document.getElementById("modalImagem");
const modalEndereco = document.getElementById("modalEndereco");
const modalEtiquetas = document.getElementById("modalEtiquetas");

const modalInstagram = document.getElementById("modalInstagram");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalWebsite = document.getElementById("modalWebsite");



// --> Functions <-- //
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

export function abrirModalOng(ongIndex) {
	if (!modalOng) return;

	const dados = dadosOngs[ongIndex];

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

function visualizarOng(cartaoId) {
	const ongIndex = currentOngs[cartaoId - 1]
	abrirModalOng(ongIndex)
}

export function Initialize() {
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

	for (let i = 1; i <= 5; i++) {
		document.getElementById("ong-button" + i).addEventListener("click", () => {
			visualizarOng(i)
		})
	}

	document.addEventListener("keydown", function(evento) {
		if (evento.key === "Escape") {
			fecharModalOng();
		}
	});
}
