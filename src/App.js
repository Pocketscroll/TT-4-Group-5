import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/NavBar/Navbar";

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
