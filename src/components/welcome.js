const modalWelcome = document.getElementById("modal-welcome");
const fecharWelcome = document.getElementById("fechar-boas-vindas");


function fecharModalWelcome() {

    if (!modalWelcome) return;

    modalWelcome.classList.remove("ativo");

    modalWelcome.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-aberto");
}


export function Initialize() {

    if (fecharWelcome) {
        fecharWelcome.addEventListener(
            "click",
            fecharModalWelcome
        );
    }

    if (comecarWelcome) {
        comecarWelcome.addEventListener(
            "click",
            fecharModalWelcome
        );
    }   

    if (modalWelcome) {

        modalWelcome.addEventListener("click", function(evento) {

            if (evento.target === modalWelcome) {
                fecharModalWelcome();
            }

        });

    }

    document.addEventListener("keydown", function(evento) {

        if (evento.key === "Escape") {
            fecharModalWelcome();
        }

    });

}