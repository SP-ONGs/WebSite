import "../styles/signUp.css";
import logo from "../../images/SPONGs_icon-nobg.png";

function SignupModal() {
	return (
		<div className="overlay">

			<div className="signup-modal">

				<button className="close-button">
					×
				</button>

				<div className="brand">
					<img src={logo} alt="SP ONGS logo" />
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
