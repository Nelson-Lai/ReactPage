import React from "react";
import logo from "./coggers.png";
import "./frontpage.css";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button
} from "@material-ui/core";
import AboutMe from "./aboutme/aboutme";
import AppDrawer from "./appDrawer/appDrawer";

class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutMeOpen: false,
			isAppDrawerOpen: false
		};
	}

	aboutMeOpenHandler = () => {
		this.setState({ isAboutMeOpen: true });
	};

	aboutMeCloseHandler = () => {
		this.setState({ isAboutMeOpen: false });
	};

	render() {
		return (
			<div>
				<AppDrawer />
				<AppBar position="fixed" className="TopBar">
					<Toolbar>
						<div className="AboutMe" onClick={this.aboutMeOpenHandler}>
							<Button color="primary" variant="contained" size="medium">
								About Me!
							</Button>
						</div>
					</Toolbar>
				</AppBar>
				<div className="AboutMeDrawer">
					<AboutMe
						isAboutMeOpen={this.state.isAboutMeOpen}
						closeHandler={this.aboutMeCloseHandler}
					/>
				</div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Haha just testing stuff just a prank bros</p>
				</header>
			</div>
		);
	}
}

export default FrontPage;
