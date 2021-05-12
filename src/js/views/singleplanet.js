import React, { useState, useEffect, useContext } from "react";
//import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";

export const Singleplanet = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.getDetallePlanetas(id);
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
						<h5 className="card-title">{store.propiedadesPlanetas.name}</h5>
						<p className="card-text">{store.detallePlaneta.description}</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p className="card-text">Name</p>
					<p className="card-text">{store.propiedadesPlanetas.name}</p>
				</div>
				<div className="col">
					<p className="card-text">Climate</p>
					<p className="card-text">{store.propiedadesPlanetas.climate}</p>
				</div>
				<div className="col">
					<p className="card-text">Population</p>
					<p className="card-text">{store.propiedadesPlanetas.population}</p>
				</div>
				<div className="col">
					<p className="card-text">Orbital Period</p>
					<p className="card-text">{store.propiedadesPlanetas.orbital_period}</p>
				</div>
				<div className="col">
					<p className="card-text">Rotation Period</p>
					<p className="card-text">{store.propiedadesPlanetas.rotation_period}</p>
				</div>
				<div className="col">
					<p className="card-text">Diameter</p>
					<p className="card-text">{store.propiedadesPlanetas.diameter}</p>
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
