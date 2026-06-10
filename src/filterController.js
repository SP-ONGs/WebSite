// --> Variables <-- //

// Data
const dadosOngsResponse = await fetch("src/data/ongsData.json");
const dadosOngs = await dadosOngsResponse.json();

// Import
import { updateCurrentOngs } from "./components/ongCard.js";
import { updateMaxPage } from "./components/pageBar.js";

// Public
export let inFilter;



// --> Functions <-- //
export function filtrarCategoria(categoria) {
	if (categoria == "todas") {
		inFilter = null;
		updateCurrentOngs(0, 1, 2, 3, 4)
		updateMaxPage(dadosOngs.length);
		return;
	}

	inFilter = []

	for (const [ongIndex, data] of Object.entries(dadosOngs)) {
		if (data.etiquetas.indexOf(categoria) > -1) {
			inFilter.push(ongIndex)
		}
	}

	updateCurrentOngs(inFilter[0], inFilter[1], inFilter[2], inFilter[3], inFilter[4])
	updateMaxPage(inFilter.length)
}

export function filtrarPorNome(nome) {
	if (nome == "") {
		inFilter = null;
		updateCurrentOngs(0, 1, 2, 3, 4)
		updateMaxPage(dadosOngs.length);
		return;
	}

	inFilter = []
	const nomeLowerCase = nome.toLowerCase()

	for (const [ongIndex, data] of Object.entries(dadosOngs)) {
		const ongNome = data.nome.toLowerCase()

		if (ongNome.includes(nomeLowerCase)) {
			inFilter.push(ongIndex)
		}
	}

	updateCurrentOngs(inFilter[0], inFilter[1], inFilter[2], inFilter[3], inFilter[4])
	updateMaxPage(inFilter.length)
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
