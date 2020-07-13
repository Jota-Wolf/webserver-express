const http = require('http');

//Con la libreria de http puedo crear un webserver de manera facil , con el
//metodo createServer , que recibira los request y la respuesta del servidor
http.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'application/json'});

	let salida = {
		nombre: 'Joaquín',
		edad: 32,
		url: req.url
	}

	res.write(JSON.stringify(salida));
	res.end();
})
	.listen(8080);

console.log('Servidor en puerto 8080');