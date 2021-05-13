import React from "react";
import Personajes from "../component/personajes.js";
import Planetas from "../component/planetas.js";
import Espera from "../component/espera";

export const Home = () => (
	<div className="text-center mt-5">
		<Espera />
	</div>

	//<div className="container">
	//<h1 className="text-warning">PERSONAJES</h1>
	//<div className="scrolling-wrapper-flexbox">
	//<Personajes />
	//</div>
	//<h1 className="text-warning mt-4">PLANETAS</h1>
	//<div className="scrolling-wrapper-flexbox">
	//<Planetas />
	//</div>
	//</div>
);
