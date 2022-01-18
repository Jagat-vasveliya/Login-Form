import React, { Component } from "react";
import "./index.css";
import Credential from "./credential.json";
import Success from "../Login_success";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "",
			showComponent: false,
			name: "",
		};
	}
	validate = (event) => {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		const checkEmail = Credential.filter(
			(validateEmail) => validateEmail.Email == email
		);
		if (checkEmail.length) {
			const checkPassword = checkEmail.filter(
				(ValidatePassword) => ValidatePassword.Password == password
			);
			if (checkPassword.length) {
				this.setState({
					status: "",
					name: checkPassword.map((name) => name.Name),
					showComponent: true,
				});
				event.preventDefault();
			} else {
				this.setState({
					status: "Incorrect Password!!!",
				});
			}
			event.preventDefault();
		} else {
			this.setState({
				status: "User Not Found!!!",
			});
			event.preventDefault();
		}
	};
	render() {
		return (
			<div>
				<div id="container">
					<h1 className="heading"> Login </h1>
					<form method="POST" onSubmit={this.validate}>
						<div className="form-control">
							<label htmlFor="email"> Email </label>
							<input
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="form-control">
							<label htmlFor="password"> Password </label>
							<input
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>
						<p className="error" id="incorrectPassword">
							{this.state.status}
						</p>
						<div className="form-control">
							<input
								type="submit"
								value="Submit"
								className="btn"
							/>
						</div>
					</form>
					{this.state.showComponent ? <Success name={this.state.name}/> : null}
				</div>
			</div>
		);
	}
}
