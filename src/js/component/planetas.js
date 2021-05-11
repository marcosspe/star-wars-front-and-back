import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
//import "../../styles/personajes.scss";
import { Link } from "react-router-dom";

function Planetas() {
	const { store } = useContext(Context);

	const arrCards = store.planetas.map((item, index) => {
		return (
			<div className="col" key={index}>
				<div className="card" style={{ width: "18rem" }}>
					<img
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-logo-1596192662.jpg"
						className="card-img-top"
					/>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p>aksdhf dihfdiuh vdihfhgaoefj as sdn fhfja sdjv sdfbalojf hfjds</p>
						<div className="line-btn">
							<Link to={"/single/" + item.uid} className="btn btn-outline-primary">
								Learn more!
							</Link>
						</div>
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
