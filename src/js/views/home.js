import React from "react";
import "../../styles/home.scss";
import Personajes from "../component/personajes.js";
import Planetas from "../component/planetas.js";

export const Home = () => (
	<div className="container">
		<h1>PERSONAJES</h1>
		<div className="scrolling-wrapper-flexbox">
			<Personajes />
		</div>
		<h1>PLANETAS</h1>
		<div className="scrolling-wrapper-flexbox">
			<Planetas />
		</div>
	</div>
);
