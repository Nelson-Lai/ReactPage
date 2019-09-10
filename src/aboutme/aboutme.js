import React from "react";
import {
	ClickAwayListener,
	Drawer,
	Typography,
	List,
	ListItem
} from "@material-ui/core";
import "./aboutme.css";
import picOfMe from "./me.png";

class AboutMe extends React.Component {
	render() {
		console.log("rendered");
		return (
			<ClickAwayListener
				onClickAway={this.props.closeHandler}
				mouseEvent={this.props.isAboutMeOpen ? "onClick" : false}
			>
				<Drawer
					classes={{ paper: "DrawerPaper" }}
					anchor="right"
					open={this.props.isAboutMeOpen}
					variant="persistent"
					transitionDuration={500}
				>
					<div className="AboutMeInfo">
						<Typography variant="h5" align="center">
							About Me:
						</Typography>
						<img src={picOfMe} alt="pictures of me" />
						<div className="text">
							<Typography variant="body1">
								Hello, I'm Nelson Lai, This is my site that I use to test
								various things. I play video games and I love memes but I HATE
								weebs.
								<br /> <br />
								Heres some dumb info about me:
							</Typography>
							<List>
								<ListItem>Email: NelsonL93@gmail.com</ListItem>
								<ListItem>
									<a href="https://www.facebook.com/LNelson">Facebook</a>
								</ListItem>
								<ListItem>
									<a href="https://www.dotabuff.com/players/33579516">
										DotaBuff
									</a>
								</ListItem>
								<ListItem>
									<a href="https://www.instagram.com/neldogmillionaire/?hl=en">
										Instagram
									</a>
								</ListItem>
							</List>
						</div>
					</div>
				</Drawer>
			</ClickAwayListener>
		);
	}
}

export default AboutMe;
