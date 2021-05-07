// import "./App.css";
// <<<<<<< HEAD
// import Homepage from "./components/Homepage";

// function App() {
// 	return (
// 		<>
// 			<Homepage />
// 		</>

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./Navbar";

function App() {
	return (
		<div className="main-container">
			<Router>
				<Navbar />
				<Home />
			</Router>
		</div>
	);
}

export default App;
