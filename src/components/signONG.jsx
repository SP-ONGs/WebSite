// --> Variables <-- //

// CSS
import "../styles/signONG.css";
import "../styles/social-media.css";

// Controllers
import {setModal, modal} from "../controllers/layoutController.js"

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

import logoImage from "../../images/SPONGs_icon-nobg.png";
import closeIconImage from "../../images/elements_vectors/CloseIcon.png";



// --> Functions <-- //
function ReactSignONG() {
	return (
		<>
			<div className="focus_BG"></div>

			<div className="signONG-modal">
				<div className="left-box">
					<div className="left-upper-container">
						<div className="photo-bg">
							<img src={addPhotoIconImage} alt="Adicionar foto" />
							<label>FOTO DA ONG</label>
							<button></button>
						</div>

						<div className="name-container">
							<h2>NOME DA ONG</h2>
							<div className="name-input">
								<input id="name" type="text" />
							</div>
							<div className="cep-input">
								<label>CEP</label>
								<input id="cep" type="text" />
							</div>
							<div className="location-container">
								<img src={locationIconImage} alt="Localização" />
								<h1>São Paulo, SP, Rua Doutor Joviano Pacheco de Aguirre, 255</h1>
							</div>
						</div>
					</div>

					<div className="left-middle-container">
						<div className="midia-title-container">
							<h2 className="social-midia-title">REDES SOCIAIS</h2>
							<h1 className="social-midia-title-opcional">(1 obrigatório)</h1>
						</div>

						<div className="midia-container">
							<div className="add-social-midia">
								<img src={addGreyIconImage} alt="Adicionar midia social" />
								<label>Adicionar</label>
								<button></button>
							</div>

							<div className="add-midia-container instagram">
								<img src={instagramIconImage} className="add-midia-icon" alt="Instagram" />
								<h2>Instagram</h2>
								<label>@cachorros.carentes</label>
								<img src={cancelMediaIconImage} className="remove-midia remove-midia-icon" alr="Remover" />
								<button className="remove-midia remove-midia-button"></button>
							</div>

							<div className="add-midia-container whatsapp">
								<div className="midia-bg-fade"></div>
								<img src={whatsappIconImage} className="add-midia-icon" alt="Whatsapp" />
								<h2>Whatsapp</h2>
								<label>+55 (11) 95710-0577</label>
								<img src={cancelMediaIconImage} className="remove-midia remove-midia-icon" alr="Remover" />
								<button className="remove-midia remove-midia-button"></button>
							</div>

							<div className="add-midia-container website">
								<div className="midia-bg-fade"></div>
								<img src={websiteIconImage} className="add-midia-icon" alt="Website" />
								<h2>Website</h2>
								<label>cachorroscarentes.com</label>
								<img src={cancelMediaIconImage} className="remove-midia remove-midia-icon" alr="Remover" />
								<button className="remove-midia remove-midia-button"></button>
							</div>
						</div>
					</div>

					<div className="left-bottom-container">
						<h2 className="social-midia-title">TAGS DA ONG</h2>

						<div className="select-tags-container">
							<button className="tag-container">
								<img src={petTagIconImage} alt="Pet" />
								<div className="tag-divider-bar"></div>
								<label>Animais</label>
							</button>

							<button className="tag-container">
								<img src={voluntarioTagIconImage} alt="Voluntário" />
								<div className="tag-divider-bar"></div>
								<label>Voluntário</label>
							</button>

							<button className="tag-container">
								<img src={donationTagIconImage} alt="Doação" />
								<div className="tag-divider-bar"></div>
								<label>Doação</label>
							</button>
						</div>
					</div>
				</div>

				<div className="divide-bar"></div>

				<div className="right-box">
					<div className="close-button" onClick={() => {setModal("loginONG")}}>
						<img src={closeIconImage} alt="Close button" />
						<button ></button>
					</div>

					<div className="brand">
						<img src={logoImage} alt="SP ONGS logo" />
						<span>SP ONGS</span>
					</div>

					<h2 className="sign-text">Adicione as informações para cadastrar a sua ONG</h2>

					<div className="input-container">
						<div className="input-group">
							<label htmlFor="email">EMAIL</label>
							<input id="email" type="email" />
						</div>

						<div className="input-group">
							<label htmlFor="password">SENHA</label>
							<input id="password" type="password" />
						</div>

						<div className="input-group">
							<label htmlFor="password">CONFIMAR SENHA</label>
							<input id="password" type="password" />
						</div>
					</div>

					<button className="signin-button">Cadastrar</button>
				</div>
			</div>
		</>
	);
}

function SignONGComponent() {
	return(
		<>
			{modal == "signONG" && (
				<ReactSignONG />
			)}
		</>
	)
}



export default SignONGComponent;
