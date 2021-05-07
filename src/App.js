import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount"
import MakeATransaction from "./pages/MakeATransaction"

import { Navbar } from "./components/NavBar/Navbar";
export default function App() {
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
                <Route exact path="/account">
                    <Navbar/>
                    <MyAccount/>
                </Route>

				<Route exact path="/makeTransaction">
                    <Navbar/>
                    <MakeATransaction/>
                </Route>
            </Router>
        </div>
    );
	}