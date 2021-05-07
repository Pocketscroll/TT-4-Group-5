import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import Home from "./pages/Home";

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
