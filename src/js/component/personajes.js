import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/personajes.scss";

function Personajes() {
	const { store } = useContext(Context);
	return (
		<div>
			{store.personajes.map((item, index) => (
				<div className="container" key={index}>
					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-logo-1596192662.jpg"
							className="card-img-top"
						/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p>aksdhf dihfdiuh vdihfhgaoefj as sdn fhfja sdjv sdfbalojf hfjds</p>
							<div className="line-btn">
								<p className="btn btn-outline-primary">Learn more!</p>
								<p className="btn btn-outline-warning" />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Personajes;
