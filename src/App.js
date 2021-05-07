import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<div className="main-container">
			<Router>
				<Route exact path="/">
					<Navbar />
					<Home />
				</Route>

				<Route exact path="/login">
					<Navbar />
					<Login />
				</Route>

				<Route exact path="/dashboard">
					<Navbar />
					<Dashboard />
				</Route>
			</Router>
		</div>
	);
}

export default App;
