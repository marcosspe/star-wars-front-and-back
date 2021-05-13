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
		<div className="container" id="bodycharacter">
			<div className="row">
				<div className="col">
					<div className="container imgsingle">
						<img
							id="imgpers"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-logo-1596192662.jpg"
							alt="..."
						/>
					</div>
				</div>
				<div className="col">
					<div className="container singletitle">
						<h1 className="card-title text-white">{store.propiedadesPersonajes.name}</h1>
						<h4 className="card-text text-white">{store.detallePersonaje.description}</h4>
					</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row align-center pt-3" id="datos">
					<div className="col">
						<h5 className="card-text">
							<strong>Name</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.name}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Birth Year</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.birth_year}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Gender</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.gender}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Height</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.height}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Skin Color</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.skin_color}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Eye Color</strong>
						</h5>
						<p className="card-text">{store.propiedadesPersonajes.eye_color}</p>
					</div>
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
