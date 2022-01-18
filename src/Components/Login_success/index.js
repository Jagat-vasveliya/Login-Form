import React, { Component } from "react";

export default function loginSuccess(props) {
		return (
			<div>
				<h1 className="success">
					Welcome, <br /> {props.name}</h1>
			</div>
		);
}
