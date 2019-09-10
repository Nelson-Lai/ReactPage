import React from "react";
import { Drawer, Tabs, Tab, Typography, Divider } from "@material-ui/core";
import "./appDrawer.css";

const AppList = ["HomePage", "Test1", "Test2", "Test3"];

class AppDrawer extends React.Component {
	render() {
		return (
			<Drawer
				elevation={3}
				anchor="left"
				variant="permanent"
				classes={{ paper: "drawerPaper" }}
			>
				<div className="AppDrawerText">
					<Typography variant="body1" align="center">
						<strong>Apps</strong>
					</Typography>
					<Divider />
					<div className="Tabs">
						<Tabs orientation="vertical">{RenderTabList()}</Tabs>
					</div>
				</div>
			</Drawer>
		);
	}
}

function RenderTabList() {
	let TabList = [];
	AppList.forEach((app, index) => {
		TabList.push(<Tab label={app} index={index}></Tab>);
	});
	return TabList;
}

export default AppDrawer;
