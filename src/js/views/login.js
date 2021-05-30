import React, { useState, useEffect, useContext } from "react";
import pngegg from "../../img/pngegg.png";

export const Login = () => (
	<div className="container mt-5">
		<div className="row">
			<div className="col">
				<div className="row" id="cardacceso">
					<div className="col">
						<img id="imglogin" src={pngegg} />
					</div>
					<div className="col" id="textacceso">
						<h3 className="text text-warning">ACCEDE AL PODER DE LA FUERZA</h3>
					</div>
				</div>
			</div>
			<div id="login" className="col-4 border mb-5 border-warning rounded">
				<div className="container">
					<p className="card-text text-left pt-2 text-warning">Email:</p>
					<input name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" />
				</div>
				<div className="container mt-2">
					<p className="text-warning">Password</p>
					<input
						name="password"
						type="password"
						className="form-control"
						placeholder="********"
						aria-label="********"
					/>
				</div>
				<div className="container mt-4">
					<button type="button" className="btn btn-outline-warning btn-block">
						Iniciar sesión
					</button>
				</div>
				<div className="container mt-4 mb-4 d-flex justify-content-center">
					<button type="button" className="btn btn-outline-primary">
						Crear cuenta nueva
					</button>
				</div>
			</div>
		</div>
	</div>
);
