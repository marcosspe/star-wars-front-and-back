import React from "react";

function Card(props) {
    return (
        <div className="card">
			<img
				src=""
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text">Gender: </p>
				<p className="card-text">Heir Color: </p>
				<p className="card-text">Eye Color: </p>
				<div className="line-btn">
					<p className="btn btn-outline-primary">
						Learn more!
					</p>
					<p className="btn btn-outline-warning">
					</p>
				</div>
			</div>
		</div>
    );
}


export default Card;