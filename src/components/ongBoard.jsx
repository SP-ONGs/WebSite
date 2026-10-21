// --> Variables <-- //

// Components
import OngCard from './ongCard.jsx';

// CSS
import ongBoardStyle from '../styles/ongBoard.module.css';




// --> Functions <-- //

// Functions 1: ONGs board component //
function ONGsBoardComponent() {
	return (
		<div className={ongBoardStyle.ongBoard_container}>
			<OngCard />
			<OngCard />
			<OngCard />
			<OngCard />
			<OngCard />
			<OngCard />
		</div>
	)
}



export default ONGsBoardComponent;
