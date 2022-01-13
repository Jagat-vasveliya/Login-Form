import React, { Component } from "react";
import "./index.css";
import Credential from "./credential.json";

export default class Login extends Component {
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
					} else {
						document.getElementById(
							"notFound"
						).style.display = "none";
						document.getElementById(
							"notBlank"
						).style.display = "none";
						document.getElementById(
							"incorrectPassword"
						).style.display = "block";
					}
				} else {
					document.getElementById(
						"incorrectPassword"
					).style.display = "none";
					document.getElementById("notBlank").style.display =
						"none";
					document.getElementById("notFound").style.display =
						"block";
				}
			} else {
				document.getElementById("incorrectPassword").style.display =
					"none";
				document.getElementById("notFound").style.display = "none";
				document.getElementById("notBlank").style.display = "block";
			}
		}
	};
	render() {
		return (
			<div>
				<div id="container">
					<h1 className="heading"> Login </h1>{" "}
					<form action="#" method="get">
						<div className="form-control">
							<label htmlFor="email"> Email </label>{" "}
							<input
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>{" "}
						<div className="form-control">
							<label htmlFor="password"> Password </label>{" "}
							<input
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>{" "}
						<p className="error" id="notFound">
							Login Failed!
							<br />
							User Not Found!!
						</p>{" "}
						<p className="error" id="notBlank">
							Please Enter All Details{" "}
						</p>{" "}
						<p className="error" id="incorrectPassword">
							Login Failed!
							<br />
							Password was incorrect!!
						</p>{" "}
						<div className="form-control">
							<input
								type="button"
								onClick={this.validate}
								value="Submit"
								className="btn"
							/>
						</div>{" "}
					</form>{" "}
				</div>{" "}
			</div>
		);
	}
}
