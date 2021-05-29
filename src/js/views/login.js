import React, { useState, useEffect, useContext } from "react";

export const Login = () => (
	<div className="container mt-5">
		<div className="container">
			<h3 className="card-title text-center text-warning mt-5 mb-5">Entrar</h3>
			<p className="card-text text-left pt-2 text-warning">Email:</p>
			<input name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" />
			<p className="text-warning">Password</p>
			<input
				name="password"
				type="password"
				className="form-control"
				placeholder="********"
				aria-label="********"
			/>
			<div className="text-right mt-2">
				<button className="btn btn-outline-warning mr-2">Login</button>
			</div>
		</div>
	</div>
);
