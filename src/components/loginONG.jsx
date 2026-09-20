// --> Variables <-- //

// CSS
import loginStyle from "../styles/loginONG.module.css";

// Images
import logoImage from "../../images/SPONGs_icon-nobg.png";
import closeIconImage from "../../images/elements_vectors/CloseIcon.png";



// --> Functions <-- //

// Functions 1: Title components //
function CloseModalButton({ setCurrentModal }) {
	return (
		<div className={loginStyle.close_loginONG_button} onClick={() => { setCurrentModal("") }} >
			<img src={closeIconImage} alt="Close button" />
			<button ></button>
		</div>
	);
}

function SPONGS_Brand() {
	return (
		<div className={loginStyle.brand}>
			<img src={logoImage} alt="SP ONGS logo" />
			<span>SP ONGS</span>
		</div>
	)
}



// Functions 2: Input components //
function InputContainerComponent() {
	return (
		<div className={loginStyle.loginONG_input_container}>
			<div className={loginStyle.loginONG_input_group}>
				<label htmlFor="email">EMAIL</label>
				<input id="email" type="email" />
			</div>

			<div className={loginStyle.loginONG_input_group}>
				<label htmlFor="password">SENHA</label>
				<input id="password" type="password" />
			</div>
		</div>
	);
}

function LoginButton() {
	return (
		<button className={loginStyle.login_button}>
			Conectar
		</button>
	);
}

function OrSignComponent({ setCurrentModal }) {
	return (
		<>
			<span className={loginStyle.or}>
				ou
			</span>

			<a href="#" className={loginStyle.signin_link} onClick={() => { setCurrentModal("signONG") }}>Adicionar nova ONG</a>
		</>
	);
}



// Functions 3: Login ONG component //
function LoginONGComponent({ currentModal, setCurrentModal }) {
	return (
		currentModal === "loginONG" && (
			<div className={loginStyle.focus_BG}>

				<div className={loginStyle.login_modal}>
					<CloseModalButton setCurrentModal={setCurrentModal} />
					<SPONGS_Brand />

					<h2>Conecte a conta da sua ONG</h2>

					<InputContainerComponent />
					<LoginButton />
					<OrSignComponent setCurrentModal={setCurrentModal} />
				</div>
			</div>
		)
	);
}



export default LoginONGComponent;
