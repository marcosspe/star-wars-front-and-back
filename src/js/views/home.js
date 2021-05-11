import React from "react";
import "../../styles/home.scss";
import Personajes from "../component/personajes.js";
import Planetas from "../component/planetas.js";

export const Home = () => (
	<div>
		<div>
			<h1>PERSONAJES</h1>
			<Personajes />
		</div>
		<div>
			<h1>PLANETAS</h1>
			<Planetas />
		</div>
	</div>
);
