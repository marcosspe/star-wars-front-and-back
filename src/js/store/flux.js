const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			detallePersonaje: [],
			propiedadesPersonajes: [],
			detallePlaneta: [],
			propiedadesPlanetas: [],
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			//exampleFunction: () => {},
			loadDataPersonsYPlanets: () => {
				/* Las personas */
				console.log("entrandoooos");

				fetch(process.env.BACKEND_URL + "/people")
					.then(resp => resp.json())
					.then(resp => {
						/* console.log(resp[0].name); */
						setStore({ personajes: resp });
					})
					.catch(error => console.log(true));
				/* Los planetas */
				fetch(process.env.BACKEND_URL + "/planets")
					.then(resp => resp.json())
					.then(resp => {
						/* console.log(resp[0].name); */
						setStore({ planetas: resp });
					})
					.catch(error => console.log(true));
			},

			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/

			// 	const header = { "Content-Type": "application/json" };

			// 	fetch("https://www.swapi.tech/api/planets/", {
			// 		method: "GET",
			// 		headers: header
			// 	})
			// 		.then(res => {
			// 			return res.json();
			// 		})
			// 		.then(data => {
			// 			console.log("aqui", data);
			// 			setStore({ planetas: data.results });
			// 		})
			// 		.catch(err => {
			// 			console.log(err);
			// 		});

			// 	fetch("https://www.swapi.tech/api/people/", {
			// 		method: "GET",
			// 		headers: header
			// 	})
			// 		.then(res => {
			// 			return res.json();
			// 		})
			// 		.then(data => {
			// 			console.log("aqui", data);
			// 			setStore({ personajes: data.results });
			// 		})
			// 		.catch(err => {
			// 			console.log(err);
			// 		});
			// },

			getDetallePersonajes: uid => {
				fetch("https://www.swapi.tech/api/people/" + uid, {
					method: "GET"
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aquiotra", data);
						setStore({ detallePersonaje: data.result, propiedadesPersonajes: data.result.properties });
					})
					.catch(err => {
						console.log(err);
					});
			},

			getDetallePlanetas: uid => {
				fetch("https://www.swapi.tech/api/planets/" + uid, {
					method: "GET"
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aquiotra", data);
						setStore({ detallePlaneta: data.result, propiedadesPlanetas: data.result.properties });
					})
					.catch(err => {
						console.log(err);
					});
			},
			agregarFavoritos: elemento => {
				const store = getStore();
				let favoritosCopia = [...store.favoritos];
				favoritosCopia.push(elemento);
				setStore({ favoritos: favoritosCopia });
			},
			quitarFavoritos: elemento => {
				const store = getStore();
				let favoritosCopia = [...store.favoritos];
				setStore({ favoritos: favoritosCopia.filter(item => item !== elemento) });
			}
		}
	};
};

export default getState;
