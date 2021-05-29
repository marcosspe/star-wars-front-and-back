import React, { useState, useEffect, useContext } from "react";

export const Registro = () => (
	<div className="container mt-5">
		<div className="container mt-5">
			<h3 className="card-title text-center text-warning mt-5 mb-5">Registro</h3>
			<div className="row">
				<div className="col">
					<p className="card-text text-warning">First_name:</p>
					<input
						name="first_name"
						type="text"
						className="form-control"
						placeholder="first_name"
						aria-label="first_name"
					/>
				</div>
				<div className="col">
					<p className="card-text text-warning">Last_name:</p>
					<input
						name="last_name"
						type="text"
						className="form-control"
						placeholder="last_name"
						aria-label="last_name"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p className="card-text text-warning">Email</p>
					<input name="email" type="text" className="form-control" placeholder="email" aria-label="email" />
				</div>
				<div className="col">
					<p className="card-text text-warning">Password</p>
					<input
						name="password"
						type="password"
						className="form-control"
						placeholder="********"
						aria-label="********"
					/>
				</div>
			</div>
			<div className="text-right mt-2">
				<button className="btn btn-outline-warning mr-2">Registro</button>
			</div>
		</div>
	</div>
);
