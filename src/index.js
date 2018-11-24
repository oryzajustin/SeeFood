/*
Taken from: https://github.com/insin/nwb/blob/master/docs/guides/ReactApps.md#entry-point

src/index.js is the entry point for the React app, which is usually responsible for "global" work prior to rendering the app:
	- Importing CSS which will apply globally.
	- Performing any required polyfilling.
	- Performing configuration of libraries being used which need it, e.g. localisation settings.
	- Composing and rendering the app's top-level components.
*/

// Global styles
import 'bulma/css/bulma.css';
import './index.css';

// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
// import NavbarComponent from './components/Navbar/NavbarComponent.js';
// import FooterComponent from './components/Footer/FooterComponent.js';

// Containers
// import LandingPage from './containers/LandingPage/LandingPage.js';
// import BidListPage from './containers/BidListPage/BidListPage.js';
// import RetainerContractPage from './containers/RetainerContractPage/RetainerContractPage';
// import ClientDashboard from './containers/ClientDashboard/ClientDashboard.js';
// import IntakeMeetingPage from './containers/IntakeMeetingPage/IntakeMeetingPage.js';
// import WorkroomPage from './containers/WorkroomPage/WorkroomPage.js';
// import LawyerDashboard from './containers/LawyerDashboard/LawyerDashboard';
// import PaymentPage from './containers/PaymentPage/PaymentPage.js';
// import IntakeForm from './containers/IntakeForm/IntakeForm.js';
// import LoginPage from './containers/LoginPage/LoginPage.js';
// import SignUp from './containers/LoginPage/SignUp.js';

// Need to introduce routing later, to figure out which containers
// to display

// There will always be a NavBar at the top, and Footer at the bottom?
// Then this render should just decide that and containers focus on displaying unique content

const App = (props) => {
	return(
		<Router>
			<div>
				Test
			</div>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));