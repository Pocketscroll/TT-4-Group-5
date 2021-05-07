import "./App.css";
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Home"
import { Navbar } from "./Navbar";
import Footer from "./Footer";

import { Navbar } from "./components/NavBar/Navbar";

function App() {
	return (
		<div className='main-container'>
		<Router>
			<Navbar/>
			< Home/>
			<Footer/>			
		</Router>
		
		</div>
	);
}

export default App;
