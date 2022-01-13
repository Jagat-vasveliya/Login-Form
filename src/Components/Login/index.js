import React, { Component } from "react";
import "./index.css";
import Credential from "./credential.json";

export default class Login extends Component {
	constructor (props){
		super(props);
		this.state = {
			status : ''
		}
	}
	validate = () => {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		for (let index = 0; index < Credential.length; index++) {
			if (email != "" && password != "") {
				if (Credential[index]["Email"] == email) {
					if (Credential[index]["Password"] == password) {
						document.getElementById(
							"container"
						).innerHTML = `<h1 className='success'>Welcome, <br /> ${Credential[index]["Name"]} </h1>`;
						break;
					} else {
						this.setState ({
							status: 'Incorrect Password!!!'
						})
						break;
					}
				} else {
					this.setState ( {
						status: 'User Not Found!!!'
					})
				}
			} else {
				this.setState ({
					status: 'Please Enter All Detail!!'
				})
			}
		}
	};
	render() {
		return (
			<div>
				<div id="container">
					<h1 className="heading"> Login </h1>
					<form action="#" method="get">
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
								type="button"
								onClick={this.validate}
								value="Submit"
								className="btn"
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
