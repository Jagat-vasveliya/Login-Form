import React, { Component } from "react";

export default class loginSuccess extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1 className="success">
					Welcome, <br /> {this.props.name}</h1>
			</div>
		);
	}
}
