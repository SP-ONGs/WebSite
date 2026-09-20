// --> Variables <-- //

// React
import { useState } from "react";

// Components
import LoginONGComponent from './components/loginONG.jsx'
import SignONGComponent from './components/signONG.jsx'



// --> Functions <-- //
function App() {
	const [currentModal, setCurrentModal] = useState("loginONG");

	return (
		<>
			<LoginONGComponent currentModal={currentModal} setCurrentModal={setCurrentModal} />
			<SignONGComponent currentModal={currentModal} setCurrentModal={setCurrentModal} />
		</>
	)
}

export default App
