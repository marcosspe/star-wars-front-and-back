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
			loadSomeData: () => {
				fetch(process.env.BACKEND_URL + "/people")
					.then(resp => resp.json())
					.then(resp => {
						setStore({ personajes: resp });
					})
					.catch(error => console.log(true));

				fetch(process.env.BACKEND_URL + "/planets")
					.then(resp => resp.json())
					.then(resp => {
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

			getDetallePersonajes: id => {
				fetch(process.env.BACKEND_URL + "/people/" + id, {
					method: "GET"
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aquiotra", data);
						setStore({ detallePersonaje: data });
					})
					.catch(err => {
						console.log(err);
					});
			},

			getDetallePlanetas: id => {
				fetch(process.env.BACKEND_URL + "/planets/" + id, {
					method: "GET"
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aquiotra", data);
						setStore({ detallePlaneta: data });
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
