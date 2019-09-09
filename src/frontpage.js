import React from "react";
import logo from "./logo.svg";
import "./frontpage.css";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AboutMe from "./aboutme/aboutme";

class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutMeOpen: false
		};
	}

	aboutMeOpenHandler = () => {
		this.setState({ isAboutMeOpen: true });
	};

	aboutMeCloseHandler = () => {
		console.log("closed");
		this.setState({ isAboutMeOpen: false });
	};

	render() {
		console.log("isaboutme", this.state.isAboutMeOpen);
		return (
			<div>
				<AppBar position="static">
					<Toolbar className="TopBar">
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Applets</Typography>
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
