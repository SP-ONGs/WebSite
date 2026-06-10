// --> Variables <-- //

// Import
import { updateCurrentOngs } from "./ongCard.js";
import { inFilter } from "../filterController.js"


// Private
let currentPage = 1;
let activePageButton;
let maxPage;



// --> Functions <-- //
function getPageViewType() {
	if (maxPage <= 7 | currentPage < 5) {
		return "InStart"
	} else if (maxPage > 7 && currentPage >= maxPage - 3) {
		return "InEnd"
	} else {
		return "InMiddle"
	}
}

function updatePagesButtons() {
	const pageButton1 = document.getElementById("pageButton-1");
	const pageButton2 = document.getElementById("pageButton-2");
	const pageButton3 = document.getElementById("pageButton-3");
	const pageButton4 = document.getElementById("pageButton-4");
	const pageButton5 = document.getElementById("pageButton-5");
	const pageButton6 = document.getElementById("pageButton-6");
	const pageButton7 = document.getElementById("pageButton-7");

	// Update if the current page is in middle of max pages
	const pageViewType = getPageViewType()

	pageButton1.textContent = "1";

	if (pageViewType == "InStart") {
		pageButton2.textContent = "2"
		pageButton3.textContent = "3"
		pageButton4.textContent = "4"
		pageButton5.textContent = "5"
		pageButton6.textContent = "..."

	} else if (pageViewType == "InMiddle") {
		pageButton2.textContent = "..."
		pageButton3.textContent = (currentPage - 1).toString()
		pageButton4.textContent = currentPage.toString()
		pageButton5.textContent = (currentPage + 1).toString()
		pageButton6.textContent = "..."
	} else {
		pageButton2.textContent = "..."
		pageButton3.textContent = (maxPage - 4).toString()
		pageButton4.textContent = (maxPage - 3).toString()
		pageButton5.textContent = (maxPage - 2).toString()
		pageButton6.textContent = (maxPage - 1).toString()
	}

	pageButton7.textContent = maxPage

	// Update if there is not enough pages
	for (let index = 0; index < 7; index++) {
		const buttonNumber = (7 - index);
		const pageButton = document.getElementById("pageButton-" + buttonNumber);

		if (buttonNumber > maxPage) {
			pageButton.style.display = "None"
		} else {
			pageButton.style.display = ""
		}
	}
}

export function updateMaxPage(ongsAmount) {
	maxPage = Math.max(Math.ceil(ongsAmount / 5), 1);
	updatePagesButtons()

	const firstPageButton = document.getElementById("pageButton-1");
	selectPageButton(firstPageButton);
}

function selectPageButton(pageButton) {
	if (activePageButton) {
		activePageButton.classList.remove('ativo');
	}

	pageButton.classList.add('ativo');
	activePageButton = pageButton;
}

function changePage(pageNumber) {
	const initialIndex = (pageNumber - 1) * 5

	// Update ongs card
	if (inFilter) {
		updateCurrentOngs(
			inFilter[initialIndex],
			inFilter[initialIndex + 1],
			inFilter[initialIndex + 2],
			inFilter[initialIndex + 3],
			inFilter[initialIndex + 4]
		);
	} else {
		updateCurrentOngs(initialIndex, initialIndex + 1, initialIndex + 2, initialIndex + 3, initialIndex + 4);
	}

	currentPage = pageNumber;

	// Update pages button
	let buttonNumber = pageNumber;
	const pageViewType = getPageViewType()

	if (pageViewType == "InMiddle") {
		buttonNumber = 4;
	} else if (pageViewType == "InEnd") {
		buttonNumber = 7 - (maxPage - pageNumber)
	}

	const pageButton = document.getElementById(`pageButton-${buttonNumber}`);

	selectPageButton(pageButton)
	updatePagesButtons()
}

function changePageButton(buttonIndex) {
	const pageViewType = getPageViewType()

	if (pageViewType == "InStart") {
		if (buttonIndex == 6) {
			return;
		}

		if (buttonIndex == 7) {
			changePage(maxPage);
		} else {
			changePage(buttonIndex);
		}
	} else if (pageViewType == "InMiddle") {
		if (buttonIndex == 2 | buttonIndex == 6) {
			return;
		}

		if (buttonIndex == 1) {
			changePage(1);
		} else if (buttonIndex == 7) {
			changePage(maxPage);
		} else {
			changePage(currentPage + (buttonIndex - 4));
		}
	} else {
		if (buttonIndex == 2) {
			return;
		}

		if (buttonIndex == 1) {
			changePage(1);
		} else {
			changePage(maxPage - (7 - buttonIndex));
		}
	}
}

function changePagePrevius() {
	if (currentPage > 1) {
		changePage(currentPage - 1)
	}
}

function changePageNext() {
	if (!maxPage | currentPage < maxPage) {
		changePage(currentPage + 1)
	}
}

export function Initialize() {
	const firstPageButton = document.getElementById("pageButton-1");
	//updateMaxPage(dadosOngs.length);
	updateMaxPage(100);
	selectPageButton(firstPageButton);

	for (let i = 1; i <= 7; i++) {
		document.getElementById("pageButton-" + i).addEventListener("click", () => {
			changePageButton(i)
		})
	}

	document.getElementById("previusPageButton").addEventListener("click", changePagePrevius)
	document.getElementById("nextPageButton").addEventListener("click", changePageNext)
}
