import React from "react";
import "../../styles/home.scss";
import Personajes from "../component/personajes.js";

export const Home = () => (
	<div
		className="d-flex flex-row flex-nowrap overflow-auto
">
		<Personajes />
	</div>
);
