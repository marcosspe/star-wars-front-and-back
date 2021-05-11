const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			//exampleFunction: () => {},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				const header = { "Content-Type": "application/json" };

				fetch("https://swapi.dev/api/planets/", {
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

				fetch("https://swapi.dev/api/people/", {
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
			}
		}
	};
};

export default getState;
