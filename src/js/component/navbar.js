import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
						Favorites {store.favoritos.length}
					</button>
					<div className="dropdown-menu mt-3 bg-dark" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((item, index) => {
							return (
								<li key={index} className="dropdown-item bg-dark text-warning">
									{item}{" "}
									<i
										type="button"
										className="far fa-trash-alt text-primary"
										onClick={() => actions.quitarFavoritos(item)}
									/>
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
