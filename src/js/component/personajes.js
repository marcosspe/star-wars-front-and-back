import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/personajes.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Personajes() {
	const { store, actions } = useContext(Context);

	const arrCards = store.personajes.map((item, index) => {
		return (
			<div className="col mb-3" key={index}>
				<div className="card">
					<img src={item.Img} className="card-img-top" />
					<div className="card-body" id="bodycard">
						<h5 className="card-title text-white text-center">{item.Name}</h5>
						<p className="text-white-50 text-center">
							aksdhf dihfdiuh vdihfhgaoefj as sdn fhfja sdjv sdfbalojf hfjds
						</p>
					</div>
					<div className="card-footer d-flex justify-content-between" id="footcard">
						<div className="line-btn">
							<Link to={"/singlecharacter/" + item.id} className="btn btn-outline-primary">
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

export default Personajes;
