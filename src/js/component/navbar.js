import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-beige navbar-light mb-3">
			<Link to="/">
				
			</Link>
			<div className="ml-auto">
				<Link to="/contacto/id">
					<button className="btn btn-success m-3">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
