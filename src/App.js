import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Components
import Chart from "./components/Chart.js";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ff5252",
		},
		secondary: {
			main: "#f06292",
		},
	},
	typography: {
		useNextVarians: true,
	},
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<div className="container">
							<Switch></Switch>
						</div>
					</Router>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
