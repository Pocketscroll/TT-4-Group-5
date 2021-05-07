import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"

import { Navbar } from "./components/NavBar/Navbar";
import Footer from "./Footer";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import TransactionHistory from "./pages/TransactionHistory";
import ViewBalance from "./ViewBalance";

function App() {
	return (
		<div className="main-container">
			<Router>
				<Navbar />
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
				<Route exact path="/history">
					<TransactionHistory />
				</Route>
				<Route exact path="/account">
					<ViewBalance/>
				</Route>



				<Footer />
			</Router>
		</div>
	);
}

export default App;
