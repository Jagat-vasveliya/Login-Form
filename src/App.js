import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div id="container">
					<h1 className="heading">Login</h1>
					<form action="#" method="get">
						<div className="form-control">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="form-control">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>
						<div className="form-control">
							<input
								type="button"
								onClick={validate}
								value="Submit"
								className="btn"
							/>
						</div>
					</form>
				</div>
			</header>
		</div>
	);
}
/* function check(event){
     alert(event);
	var emailBox = document.getElementById("email");
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (event.match(mailFormat)) {
		emailBox.style.border = "thin solid green";
	} else {
		emailBox.style.border = "thin solid red";
	}
}; */
function validate() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
     console.log(email+password);
     document.getElementById("container").innerHTML = "<h1>Email: </h1>" + email + "<h1>Password: </h1>" + password ;
}


export default App;
