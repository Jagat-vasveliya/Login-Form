import React, { Component, useState } from "react";
import "./index.css";
import Credential from "./credential.json";
import Success from "../Login_success";

export default function Login(props) {
	const [status, setStatus] = useState();
	const [showComponent, setComponent] = useState();
	const [userName, setName] = useState('');

	const validate = (event) => {
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
				setStatus("");
				setName(checkPassword.map((name) => name.Name));
				setComponent(true);
				event.preventDefault();
			} else {
				setName('');
				setStatus("Incorrect Password!!!");
			}
			event.preventDefault();
		} else {
			setName('');
			setStatus("User Not Found!!!");
			event.preventDefault();
		}
	};

	return (
		<div>
			<div id="container">
				<h1 className="heading"> Login </h1>
				<form method="POST" onSubmit={validate}>
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
						{status}
					</p>
					<div className="form-control">
						<input
							type="submit"
							value="Submit"
							className="btn"
						/>
					</div>
				</form>
				{showComponent ? <Success name={userName} /> : null}
			</div>
		</div>
	);
}
