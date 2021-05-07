import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"

import { Navbar } from "./components/NavBar/Navbar";

function App() {
	return (
		<div className="main-container">
			<Router>

				<Route exact path="/">
					<Navbar/>
					<Home />
				</Route>

				<Route exact path="/login">
					<Navbar/>
					<Login/>
				</Route>

				<Route exact path="/dashboard">
					<Navbar/>
					<Dashboard/>
				</Route>

			</Router>
		</div>
	);
}

export default App;
