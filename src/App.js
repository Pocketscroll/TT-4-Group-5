import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./Footer";
import { Navbar } from "./components/NavBar/Navbar";
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
			</Router>
		</div>
	);
}

export default App;
