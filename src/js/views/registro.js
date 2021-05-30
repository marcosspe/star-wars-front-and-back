import React, { useState, useEffect, useContext } from "react";
import pngwing from "../../img/pngwing.png";

export const Registro = () => (
	<div className="container mt-5">
		<div className="row">
			<div className="col">
				<div className="row" id="cardacceso">
					<div className="col">
						<img id="imgreg" src={pngwing} />
					</div>
					<div className="col" id="textacceso">
						<h3 className="text text-warning">ÚNETE A LA FUERZA</h3>
					</div>
				</div>
			</div>
			<div id="login" className="col-4 border mb-5 border-warning rounded">
				<div className="row mt-4" id="">
					<div className="col">
						<input
							name="first_name"
							type="text"
							className="form-control"
							placeholder="Nombre"
							aria-label="Nombre"
						/>
					</div>
					<div className="col">
						<input
							name="last_name"
							type="text"
							className="form-control"
							placeholder="Apellido"
							aria-label="Apellido"
						/>
					</div>
				</div>
				<div className="row mt-4" id="">
					<div className="col">
						<input
							name="Email"
							type="text"
							className="form-control"
							placeholder="Email"
							aria-label="Email"
						/>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col">
						<input
							name="Password"
							type="password"
							className="form-control"
							placeholder="Password"
							aria-label="********"
						/>
					</div>
				</div>
				<div className="container mt-4">
					<button type="button" className="btn btn-outline-success btn-block">
						Registrarte
					</button>
				</div>
			</div>
		</div>
	</div>
);
