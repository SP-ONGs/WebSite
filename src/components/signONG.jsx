// --> Variables <-- //

// React
import { useState } from "react";

// CSS
import signStyle from "../styles/signONG.module.css";
import "../styles/social-media.css";

// Images
import addPhotoIconImage from "../../images/elements_vectors/AddPhotoIcon.png";
import locationIconImage from "../../images/elements_vectors/LocationIcon.png";

import addGreyIconImage from "../../images/elements_vectors/AddGreyIcon.png";
import cancelMediaIconImage from "../../images/elements_vectors/CancelMediaIcon.png";
import instagramIconImage from "../../images/elements_vectors/InstagramIcon.png";
import whatsappIconImage from "../../images/elements_vectors/WhatsappIcon.png";
import websiteIconImage from "../../images/elements_vectors/WebsiteIcon.png";

import petTagIconImage from "../../images/elements_vectors/PetTagIcon.png";
import voluntarioTagIconImage from "../../images/elements_vectors/VoluntarioTagIcon.png";
import donationTagIconImage from "../../images/elements_vectors/DonationTagIcon.png";

import hideIconImage from "../../images/elements_vectors/HideIcon.png";
import nonHideIconImage from "../../images/elements_vectors/NonHideIcon.png";

import logoImage from "../../images/SPONGs_icon-nobg.png";
import closeIconImage from "../../images/elements_vectors/CloseIcon.png";



// --> Functions <-- //

// Functions 1: Sign button component //
function setError(element, isError) {
	if (isError) {
		element.classList.add(signStyle.error_outline);
		return;
	}

	element.classList.remove(signStyle.error_outline);
}

function ResetErrors() {
	const nameInput = document.getElementById("signONG-name");
	const cepInput = document.getElementById("signONG-cep");

	const confirmPasswordInput = document.getElementById("signONG-confirm_password");

	setError(nameInput.parentElement, false)
	setError(cepInput.parentElement, false)
	setError(confirmPasswordInput.parentElement, false)
}

function OnSign() {
	const nameInput = document.getElementById("signONG-name");
	const cepInput = document.getElementById("signONG-cep");

	const emailInput = document.getElementById("signONG-email");
	const passwordInput = document.getElementById("signONG-password");
	const confirmPasswordInput = document.getElementById("signONG-confirm_password");

	// Check if has email and password
	const HAVE_EMAIL = emailInput.value !== "";
	const HAVE_PASSWORD = passwordInput.value !== "" && confirmPasswordInput.value !== "";

	if (!HAVE_EMAIL || !HAVE_PASSWORD) {
		return
	}

	// Update error outlines
	setError(nameInput.parentElement, nameInput.value === "")
	setError(cepInput.parentElement, cepInput.value === "")

	const IS_SAME_PASSWORD = passwordInput.value === confirmPasswordInput.value
	setError(confirmPasswordInput.parentElement, !IS_SAME_PASSWORD)

	if (!IS_SAME_PASSWORD) {
		return
	}

	console.log("Sign click")
}

function UpdateSignButtonEnabled() {
	const emailInput = document.getElementById("signONG-email");
	const passwordInput = document.getElementById("signONG-password");
	const confirmPasswordInput = document.getElementById("signONG-confirm_password");

	const signButton = document.getElementById("signONG-sign_button");

	// Check if has email and password
	const HAVE_EMAIL = emailInput.value !== "";
	const HAVE_PASSWORD = passwordInput.value !== "" && confirmPasswordInput.value !== "";

	const CAN_SIGNIN = HAVE_EMAIL & HAVE_PASSWORD
	console.log("Button updated " + CAN_SIGNIN)

	if (!CAN_SIGNIN) {
		signButton.classList.add(signStyle.signin_button_disabled);
		return;
	}

	signButton.classList.remove(signStyle.signin_button_disabled);
}

function SignButtonComponent() {
	return (
		<button
			className={[signStyle.signin_button, signStyle.signin_button_disabled].join(" ")}
			onClick={OnSign}
			id="signONG-sign_button"
		>Cadastrar</button>
	)
}



// Functions 2: Left-side (ONG information) //
function AddNameContainer() {
	return (
		<div className={signStyle.left_upper_container}>
			<div className={signStyle.photo_bg}>
				<img src={addPhotoIconImage} alt="Adicionar foto" />
				<label>FOTO DA ONG</label>
				<button></button>
			</div>

			<div className={signStyle.name_container}>
				<h2>NOME DA ONG</h2>
				<div className={signStyle.name_input}>
					<input id="signONG-name" type="text" onSelect={ResetErrors} />
				</div>
				<div className={signStyle.cep_input}>
					<label>CEP</label>
					<input id="signONG-cep" type="text" onSelect={ResetErrors} />
				</div>
				<div className={signStyle.location_container}>
					<img src={locationIconImage} alt="Localização" />
					<h1 id="signONG-location_text"> São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255</h1>
				</div>
			</div>
		</div>
	)
}

function AddSocialMediaContainer() {
	return (
		<div className={signStyle.left_middle_container}>
			<div className={signStyle.midia_title_container}>
				<h2 className={signStyle.social_midia_title}>REDES SOCIAIS</h2>
				<h1 className={signStyle.social_midia_title_opcional}>(1 obrigatório)</h1>
			</div>

			<div className={signStyle.midia_container}>
				<div className={signStyle.add_social_midia} id="signONG-add-midia">
					<img src={addGreyIconImage} alt="Adicionar midia social" />
					<label>Adicionar</label>
					<button></button>
				</div>

				<div className="add_midia_container instagram" id="signONG-instagram">
					<img src={instagramIconImage} className="add_midia_icon" alt="Instagram" />
					<h2>Instagram</h2>
					<label>@cachorros.carentes</label>
					<img src={cancelMediaIconImage} className="remove_midia remove_midia_icon" alr="Remover" />
					<button className="remove_midia remove_midia_button"></button>
				</div>

				<div className="add_midia_container whatsapp" id="signONG-whatsapp">
					<div className="midia_bg_fade"></div>
					<img src={whatsappIconImage} className="add_midia_icon" alt="Whatsapp" />
					<h2>Whatsapp</h2>
					<label>+55 (11) 95710-0577</label>
					<img src={cancelMediaIconImage} className="remove_midia remove_midia_icon" alr="Remover" />
					<button className="remove_midia remove_midia_button"></button>
				</div>

				<div className="add_midia_container website" id="signONG-website">
					<div className="midia_bg_fade"></div>
					<img src={websiteIconImage} className="add_midia_icon" alt="Website" />
					<h2>Website</h2>
					<label>cachorroscarentes.com</label>
					<img src={cancelMediaIconImage} className="remove_midia remove_midia_icon" alr="Remover" />
					<button className="remove_midia remove_midia_button"></button>
				</div>
			</div>
		</div>
	)
}

function AddTagContainer() {
	return (
		<div className={signStyle.left_bottom_container}>
			<h2 className={signStyle.social_midia_title}>TAGS DA ONG</h2>

			<div className={signStyle.select_tags_container}>
				<button className={signStyle.tag_container}>
					<img src={petTagIconImage} alt="Pet" />
					<div className={signStyle.tag_divider_bar}></div>
					<label>Animais</label>
				</button>

				<button className={signStyle.tag_container}>
					<img src={voluntarioTagIconImage} alt="Voluntário" />
					<div className={signStyle.tag_divider_bar}></div>
					<label>Voluntário</label>
				</button>

				<button className={signStyle.tag_container}>
					<img src={donationTagIconImage} alt="Doação" />
					<div className={signStyle.tag_divider_bar}></div>
					<label>Doação</label>
				</button>
			</div>
		</div>
	)
}



// Functions 3: Right side (Email & password) //
function CloseModalButton({ setCurrentModal }) {
	return (
		<div className={signStyle.close_button} onClick={() => { setCurrentModal("loginONG") }}>
			<img src={closeIconImage} alt="Close button" />
			<button></button>
		</div>
	)
}

function SPONGS_Brand() {
	return (
		<div className={signStyle.brand}>
			<img src={logoImage} alt="SP ONGS logo" />
			<span>SP ONGS</span>
		</div>
	)
}

function SignInputsContainer() {
	const [hidePassword, setHidePassword] = useState(true);
	const [hideConfirm, setHideConfirm] = useState(true);

	function onHideClick(tag) {
		const hidePasswordElement = document.getElementById("signONG-hide-password")
		const hideConfirmPasswordElement = document.getElementById("signONG-hide-confirm_password")

		const element = tag == "password" ? hidePasswordElement : hideConfirmPasswordElement;
		const setStateFunction = tag == "password" ? setHidePassword : setHideConfirm;

		const unHideClass = signStyle.input_group_unHideButton
		const IS_HIDE = !element.classList.contains(unHideClass)

		if (IS_HIDE) {
			element.classList.add(unHideClass)
			element.src = nonHideIconImage
			setStateFunction(false)
		} else {
			element.classList.remove(unHideClass)
			element.src = hideIconImage
			setStateFunction(true)
		}
	}

	return (
		<div className={signStyle.signONG_input_container}>
			<div className={signStyle.input_group}>
				<label htmlFor="email">EMAIL</label>
				<input id="signONG-email" type="email" onChange={UpdateSignButtonEnabled} onSelect={ResetErrors} />
			</div>

			<div className={signStyle.input_group}>
				<label htmlFor="password">SENHA</label>
				<img id="signONG-hide-password" src={hideIconImage} className={signStyle.input_group_hideButton} onClick={() => onHideClick("password")} />
				<input id="signONG-password" type={hidePassword ? "password" : "text"} onChange={UpdateSignButtonEnabled} onSelect={ResetErrors} />
			</div>

			<div className={signStyle.input_group}>
				<label htmlFor="password">CONFIMAR SENHA</label>
				<img id="signONG-hide-confirm_password" src={hideIconImage} className={signStyle.input_group_hideButton} onClick={() => onHideClick("confirm")} />
				<input id="signONG-confirm_password" type={hideConfirm ? "password" : "text"} onChange={UpdateSignButtonEnabled} onSelect={ResetErrors} />
			</div>
		</div>
	)
}



// Functions 4: Sign ONG component //
function SignONGComponent({ currentModal, setCurrentModal }) {
	return (
		currentModal === "signONG" && (
			<>
				<div className={signStyle.focus_BG}></div>

				<div className={signStyle.signONG_modal}>
					<div className={signStyle.left_box}>
						<AddNameContainer />
						<AddSocialMediaContainer />
						<AddTagContainer />
					</div>

					<div className={signStyle.divide_bar}></div>

					<div className={signStyle.right_box}>
						<CloseModalButton setCurrentModal={setCurrentModal} />

						<SPONGS_Brand />

						<h2 className={signStyle.sign_text}>Adicione as informações para cadastrar a sua ONG</h2>
						<SignInputsContainer />
						<SignButtonComponent />
					</div>
				</div>
			</>
		)
	);
}



export default SignONGComponent;
