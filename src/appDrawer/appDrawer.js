import React from "react";
import { Drawer, List, ListItem, Typography } from "@material-ui/core";
import "./appDrawer.css";

class AppDrawer extends React.Component {
	render() {
		return (
			<Drawer anchor="left" variant="permanent">
				<List>
					<ListItem>
						<Typography variant="h6" align="center">
							Apps
						</Typography>
					</ListItem>
					<ListItem></ListItem>
					<ListItem>NOTHIN HERE YET</ListItem>
				</List>
			</Drawer>
		);
	}
}

export default AppDrawer;
