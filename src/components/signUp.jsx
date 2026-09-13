// --> Variables <-- //

// CSS
import "../styles/signUp.css";

// Images
import logoImage from "../../images/SPONGs_icon-nobg.png";
import closeIconImage from "../../images/elements_vectors/CloseIcon.png";



// --> Functions <-- //
function SignupModal() {
	return (
		<div className="focus_BG">

			<div className="signup-modal">

				<div className="close-button">
					<img src={closeIconImage} alt="Close button" />
					<button ></button>
				</div>

				<div className="brand">
					<img src={logoImage} alt="SP ONGS logo" />
					<span>SP ONGS</span>
				</div>

				<h2>Crie uma conta para sua ONG</h2>

				<div className="input-group">
					<label htmlFor="email">
						EMAIL
					</label>

					<input
						id="email"
						type="email"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="password">
						SENHA
					</label>

					<input
						id="password"
						type="password"
					/>
				</div>

				<button className="signup-button">
					Cadastrar
				</button>

				<span className="or">
					ou
				</span>

				<a href="#" className="login-link">
					Já tenho uma conta
				</a>

			</div>

		</div>
	);
}

function SignUpComponent() {
	return (
		<>
			<SignupModal />
		</>
	);
}

export default SignUpComponent;
