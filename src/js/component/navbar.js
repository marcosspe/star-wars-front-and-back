import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img id="logo" src={logo} />
			</Link>

			<div className="col-2 text-right">
				<div classNAme="dropdown mb-3">
					<button
						className="btn btn-outline-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu mt-3 " aria-labelledby="dropdownMenuButton" />
				</div>
			</div>
		</nav>
	);
};
