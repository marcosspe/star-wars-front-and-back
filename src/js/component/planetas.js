import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
//import "../../styles/personajes.scss";
import { Link } from "react-router-dom";

function Planetas() {
	const { store, actions } = useContext(Context);

	const arrCards = store.planetas.map((item, index) => {
		return (
			<div className="col mb-3" key={index}>
				<div className="card">
					<img src={item.Img} className="card-img-top" />
					<div className="card-body" id="bodycard">
						<h5 className="card-title text-white text-center">{item.Name}</h5>
						<p className="text-white-50 text-center">
							A planet that belongs to the Star Wars Cinematic Universe
						</p>
					</div>
					<div className="card-footer d-flex justify-content-between" id="footcard">
						<div className="line-btn">
							<Link to={"/singleplanet/" + item.id} className="btn btn-outline-primary">
								Learn more!
							</Link>
						</div>
						<button className="btn btn-outline-warning" onClick={() => actions.agregarFavoritos(item.Name)}>
							<i className="far fa-heart" />
							<i className="fas fa-heart d-none" />
						</button>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row flex-row flex-nowrap">{arrCards}</div>
		</div>
	);
}

export default Planetas;
