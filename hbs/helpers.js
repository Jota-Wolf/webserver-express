const hbs = require('hbs');

//Helpers
//Un helper es una funcion que se va disparar cuando un template lo requiera
hbs.registerHelper('getAnio', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
	let palabras = texto.split(' ');
	palabras.forEach((palabra, idx) => {
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
	});

	return palabras.join(' ');
});
