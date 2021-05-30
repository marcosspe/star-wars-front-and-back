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
		<div className="container" id="bodyplanet">
			<div className="row">
				<div className="col">
					<div className="container imgsingle">
						<img id="imgpers" src={store.detallePlaneta.Img} alt="..." />
					</div>
				</div>
				<div className="col">
					<div className="container singletitle">
						<h1 className="card-title text-white">{store.detallePlaneta.Name}</h1>
						<h4 className="card-text text-white">
							A planet that belongs to the Star Wars Cinematic Universe
						</h4>
					</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row align-center pt-3" id="datos">
					<div className="col">
						<h5 className="card-text">
							<strong>Name</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.Name}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Climate</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.Climate}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Population</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.Population}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Orbital Period</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.OrbitalPeriod}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Rotation Period</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.RotationPeriod}</p>
					</div>
					<div className="col">
						<h5 className="card-text">
							<strong>Diameter</strong>
						</h5>
						<p className="card-text">{store.detallePlaneta.Diameter}</p>
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
