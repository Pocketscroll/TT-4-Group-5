import "./App.css";
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Home"
import { Navbar } from "./Navbar";


function App() {
	return (
		<div className='main-container'>
		<Router>
			<Navbar/>
			< Home/>			
		</Router>
		
		</div>
	);
}

export default App;
