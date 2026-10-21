// --> Variables <-- //

// Component
import NavbarComponent from './navbar.jsx';
import TabsMenuComponent from './tabsMenu.jsx';
import FilterBarComponent from './filterBar.jsx';
import OngBoardComponent from './ongBoard.jsx';




// --> Functions <-- //

// Functions 1: Homepage component //
function HomepageComponent({ setCurrentModal }) {
	return (
		<>
			<NavbarComponent />
			<TabsMenuComponent setCurrentModal={setCurrentModal} />
			<FilterBarComponent />
			<OngBoardComponent />
		</>
	);
}



export default HomepageComponent;
