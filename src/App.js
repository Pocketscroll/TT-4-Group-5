import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import Footer from "./Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TransactionHistory from "./pages/TransactionHistory";

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
				<Route exact path="/history">
					<Navbar />
					<TransactionHistory />
				</Route>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
