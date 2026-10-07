// --> Functions <-- //
export async function getCepData(cep) {
	const viaCep = await fetch(
		`https://viacep.com.br/ws/${cep}/json/`
	).then(res => res.json());

	return viaCep;
}

export async function obterCoordenadasPorCEP(cep) {
	const cepData = getCepData(cep);
	const endereco = `${cepData.logradouro}, ${cepData.localidade}, ${cepData.uf}, Brasil`;

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
