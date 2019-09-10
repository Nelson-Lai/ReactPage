import React from "react";
import logo from "./coggers.png";
import "./frontpage.css";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
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
				<AppBar position="fixed" className="TopBar" elevation={5}>
					<Toolbar>
						<Typography variant="h5">Extremely Cool Site by Nelson</Typography>
						<div className="AboutMe" onClick={this.aboutMeOpenHandler}>
							<Button color="primary" variant="contained" size="medium">
								About Me!
							</Button>
						</div>
					</Toolbar>
				</AppBar>
				<AboutMe
					isAboutMeOpen={this.state.isAboutMeOpen}
					closeHandler={this.aboutMeCloseHandler}
				/>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Haha just testing stuff just a prank bros</p>
				</header>
			</div>
		);
	}
}

export default FrontPage;
