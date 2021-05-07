import "./App.css";
import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./Footer";
import { Navbar } from "./components/NavBar/Navbar";
import ViewBalance from "./ViewBalance";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className='main-container'>
		<Router>
			<Navbar/>
			<Route path="/ViewBalance" component={ViewBalance} />
			<Route path="/Dashboard" component={Dashboard} />
			< Home/>
			<Footer/>			
		</Router>
		
		</div>
	);
}

export default App;
