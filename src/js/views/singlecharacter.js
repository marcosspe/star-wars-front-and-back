import React, { useState, useEffect, useContext } from "react";
//import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";

export const Singlecharacter = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.getDetallePersonajes(id);
	}, []);

	return (
		<div className="card mb-3" style={{ maxwidth: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img
						id="imgpers"
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-logo-1596192662.jpg"
						alt="..."
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{store.propiedadesPersonajes.name}</h5>
						<p className="card-text">{store.detallePersonaje.description}</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p className="card-text">Name</p>
					<p className="card-text">{store.propiedadesPersonajes.name}</p>
				</div>
				<div className="col">
					<p className="card-text">Birth Year</p>
					<p className="card-text">{store.propiedadesPersonajes.birth_year}</p>
				</div>
				<div className="col">
					<p className="card-text">Gender</p>
					<p className="card-text">{store.propiedadesPersonajes.gender}</p>
				</div>
				<div className="col">
					<p className="card-text">Height</p>
					<p className="card-text">{store.propiedadesPersonajes.height}</p>
				</div>
				<div className="col">
					<p className="card-text">Skin Color</p>
					<p className="card-text">{store.propiedadesPersonajes.skin_color}</p>
				</div>
				<div className="col">
					<p className="card-text">Eye Color</p>
					<p className="card-text">{store.propiedadesPersonajes.eye_color}</p>
				</div>
			</div>
		</div>

		/*<div classNameName="jumbotron">
			<h1 classNameName="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr classNameName="my-4" />

			<Link to="/">
				<span classNameName="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>*/
	);
};

/*Single.propTypes = {
	match: PropTypes.object
};*/
