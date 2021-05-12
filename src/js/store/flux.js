const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			detallePersonaje: [],
			propiedadesPersonajes: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			//exampleFunction: () => {},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				const header = { "Content-Type": "application/json" };

				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aqui", data);
						setStore({ planetas: data.results });
					})
					.catch(err => {
						console.log(err);
					});

				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log("aqui", data);
						setStore({ personajes: data.results });
					})
					.catch(err => {
						console.log(err);
					});
			},

			guardarFavoritos(favoritos) {
				setStore({ favoritos: favoritos });
			},

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
			}
		}
	};
};

export default getState;
