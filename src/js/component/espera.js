import React, { useState, useContext } from "react";
import Personajes from "../component/personajes.js";
import Planetas from "../component/planetas.js";
import { Context } from "../store/appContext";

const Espera = () => {
	const { store, actions } = useContext(Context);
	const [espera, setEspera] = useState(true);

	if (espera) {
		const cambiar = () => {
			setTimeout(() => {
				setEspera(false);
			}, 4000);
		};
		return (
			<div className="mt-1 mb-1">
				{cambiar()}
				<img id="espera" src="https://media.giphy.com/media/SzQ5ao5QZ13mo/giphy.gif" />
			</div>
		);
	} else {
		return (
			<div className="container mt-5 mb-5">
				<h1 className="text-warning">PERSONAJES</h1>
				<div className="scrolling-wrapper-flexbox">
					<Personajes />
				</div>
				<h1 className="text-warning mt-4">PLANETAS</h1>
				<div className="scrolling-wrapper-flexbox mb-5">
					<Planetas />
				</div>
			</div>
		);
	}
};

export default Espera;
