// --> Variables <-- //

// Import
import { filtrarCategoria } from "../filterController.js";
import { clearBarText } from "./nameFilterBar.js";



// --> Functions <-- //
function toggleTagMenu() {
	const menu = document.getElementById('menu-filtro');
	menu.classList.toggle('ativo');

	clearBarText();
}

export function Initialize() {
	document.getElementById("tag-menu").addEventListener("click", toggleTagMenu)

	const tagButtons = document.querySelectorAll(".tag-button");

	tagButtons.forEach(button => {
		const tag = button.dataset.tag;

		button.addEventListener("click", () => {
			toggleTagMenu();
			filtrarCategoria(tag);
		})
	})
}
