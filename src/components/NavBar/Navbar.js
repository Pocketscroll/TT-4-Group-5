import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const location = useLocation();
	if (location.state === undefined) {
		location.state = {};
	}
	console.log(location);
	return (
		<Router>
			<div id="nav">
				<li className="nav-link-logo">
					<Link
						className="navigation-link"
						to={{ pathname: "/", state: { ...location.state } }}
					>
						<img
							src="data:image/png;base64,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"
							alt="dbs-logo"
							width="180"
							height="60"
						></img>
					</Link>
				</li>

				<ul className="nav-bars">
					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{ pathname: "/dashboard", state: { ...location.state } }}
						>
							Dashboard
						</Link>
					</li>
					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{ pathname: "/account", state: { ...location.state } }}
						>
							My Account
						</Link>
					</li>
					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{ pathname: "/transfer", state: { ...location.state } }}
						>
							Make a Transfer
						</Link>
					</li>

					<li className="nav-link">
						<Link
							className="navigation-link"
							to={{
								pathname: "/history",
								state: { ...location.state },
							}}
						>
							Transaction History
						</Link>
					</li>
					{Object.keys(location.state).length === 0 ? (
						<li className="nav-link">
							<Link
								className="navigation-link"
								to={{
									pathname: "/login",
									state: { ...location.state },
								}}
							>
								Log In
							</Link>
						</li>
					) : (
						<li className="nav-link">
							<Link
								className="navigation-link"
								to={{
									pathname: "/",
									state: {},
								}}
							>
								Logout [{location.state.name}]
							</Link>
						</li>
					)}
				</ul>
			</div>
		</Router>
	);
};
