// --> Variables <-- //

// Import
import { abrirModalOng } from "./ongModal.js";

// Data
const dadosOngsResponse = await fetch("src/data/ongsData.json");
const dadosOngs = await dadosOngsResponse.json();

// Private
let mapa;
let mapaInicializado = false;



// --> Functions <-- //
async function obterCoordenadasPorCEP(cep) {
	const viaCep = await fetch(
		`https://viacep.com.br/ws/${cep}/json/`
	).then(res => res.json());

	const endereco = `${viaCep.logradouro}, ${viaCep.localidade}, ${viaCep.uf}, Brasil`;

	const resultado = await fetch(
		`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`
	).then(res => res.json());

	if (resultado.length === 0) {
		throw new Error("Endereço não encontrado");
	}

	return {
		lat: parseFloat(resultado[0].lat),
		lon: parseFloat(resultado[0].lon)
	};
}

async function createOngPopup(ongIndex, ongNome, ongCEP) {
	const { lat, lon } = await obterCoordenadasPorCEP(ongCEP);

	L.marker([lat, lon])
		.addTo(mapa)
		//.bindPopup(ongNome)
		.on("click", () => {
			abrirModalOng(ongIndex)
		})
}

function toggleMap() {
	const mapaToggleButton = document.getElementById('interruptor-mapa');
	const mapaElemento = document.getElementById('mapa-leaflet');
	const placeholderMapa = document.getElementById('placeholder-mapa');

	if (!mapaToggleButton.checked) {
		mapaElemento.style.display = 'none';
		placeholderMapa.style.display = 'flex';

		return;
	}

	mapaElemento.style.display = 'block';
	placeholderMapa.style.display = 'none';

	if (!mapaInicializado) {
		mapaInicializado = true;

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

		// marcador exemplo 1 aqui 
		for (const [ongIndex, ong] of Object.entries(dadosOngs)) {
			if (ong.CEP) {
				createOngPopup(ongIndex, ong.nome, ong.CEP)
			}
		}

		/*L.marker([-23.55052, -46.633308])
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
			.openPopup();*/
	}

	setTimeout(() => {
		mapa.invalidateSize();
	}, 100);
}

export function Initialize() {
	document.getElementById("interruptor-mapa").addEventListener("change", toggleMap)
}
