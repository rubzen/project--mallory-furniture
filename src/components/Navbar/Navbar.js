import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from '../Logo';

class Navbar extends Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-dark bg-dark navfont">
					<Logo />
					<NavLink exact className="btn btn-outline-secondary" to="/">
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/terms">Terms + Conditions</NavLink>
					<NavLink to="/all-products">All Products</NavLink>
					<NavLink to="/product">Product</NavLink>
					<NavLink to="/category">Category</NavLink>
				</nav>
			</div>
		);
	}
}

export default Navbar;
