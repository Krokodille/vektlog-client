import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

class home extends Component {
	state = {
		weights: null,
	};

	componentDidMount() {
		axios
			.get("/weights")
			.then((res) => {
				console.log(res.data);
				this.setState({
					weights: res.data,
				});
			})
			.catch((err) => console.log(err));
	}
	render() {
		let recentWeightMarkup = this.state.weights ? (
			this.state.weights.map((weight) => <p>{weight.weight}</p>)
		) : (
			<p>Loading...</p>
		);
		return (
			<Grid container spacing={12}>
				<Grid item sm={12}>
					{recentWeightMarkup}
				</Grid>
			</Grid>
		);
	}
}

export default home;
