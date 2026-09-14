// --> Variable <-- //

// Import
import { filtrarPorNome } from "../filterController.js";

// Elementos-HTML
const nameBarElement = document.getElementById("ong-pesquisa-nome");



// --> Functions <-- //
export function clearBarText() {
	if (nameBarElement.value == "") {
		return;
	}

	nameBarElement.value = ""
	filtrarPorNome("")
}

export function Initialize() {
	nameBarElement.addEventListener("input", (event) => {
		filtrarPorNome(event.target.value)
	});
}
