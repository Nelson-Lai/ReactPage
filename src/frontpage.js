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

class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutMeOpen: false
		};
	}

	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar className="TopBar">
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Applets</Typography>
						<div className="AboutMe">
							<Button color="primary" variant="contained" size="medium">
								About Me!
							</Button>
						</div>
					</Toolbar>
				</AppBar>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Haha just testing stuff just a prank bros</p>
				</header>
			</div>
		);
	}
}
function handleAboutMeClick() {}

export default FrontPage;
