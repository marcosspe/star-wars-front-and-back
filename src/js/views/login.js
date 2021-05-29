import React, { useState, useEffect, useContext } from "react";

export const Login = () => (
	<div className="container mt-5">
		<div className="">
			<h3 className="card-title text-center mt-5 mb-5">Sign in</h3>
			<p className="card-text text-left pt-2">Email:</p>
			<input name="email" type="text" className="form-control" placeholder="Email" aria-label="Email" />
			<p className="">Password</p>
			<input
				name="password"
				type="password"
				className="form-control"
				placeholder="********"
				aria-label="********"
			/>
			<div className="text-right mt-2">
				<button className="btn btn-outline-warning mr-2">Login</button>
				{/* <Link to="/">
					<button className="btn btn-outline-secondary">Cancel</button>
				</Link> */}
			</div>
		</div>
	</div>
);
