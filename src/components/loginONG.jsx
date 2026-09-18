// --> Variables <-- //

// CSS
import "../styles/loginONG.css";

// Images
import logoImage from "../../images/SPONGs_icon-nobg.png";
import closeIconImage from "../../images/elements_vectors/CloseIcon.png";



// --> Functions <-- //
function LoginONGComponent() {
	return (
		<div className="focus_BG">

			<div className="login-modal">

				<div className="close-button">
					<img src={closeIconImage} alt="Close button" />
					<button ></button>
				</div>

				<div className="brand">
					<img src={logoImage} alt="SP ONGS logo" />
					<span>SP ONGS</span>
				</div>

				<h2>Conecte a conta da sua ONG</h2>

				<div className="input-container">
					<div className="input-group">
						<label htmlFor="email">EMAIL</label>
						<input id="email" type="email" />
					</div>

					<div className="input-group">
						<label htmlFor="password">SENHA</label>
						<input id="password" type="password" />
					</div>
				</div>

				<button className="login-button">
					Conectar
				</button>

				<span className="or">
					ou
				</span>

				<a href="#" className="signin-link">Adicionar nova ONG</a>

			</div>

		</div>
	);
}



export default LoginONGComponent;
