const express = require('express');
const app = express();
const hbs = require('hbs');
//de esta manera requiero los helpers para que funcionen adecuadamente
require('./hbs/helpers');

//Como process es una variable global de node , puedo obtener el puerto que quiero ocupar
//este objeto corriendo localmente no existe , por ende qeudaria en el puerto 3000
const port = process.env.PORT || 3000;

//Un middleware es una instrucción callback que se va ejecutar siempre no importa la url que se pida
//Para crear un middleware basta con app.use y especificar un callback o cualquier funcion
app.use(express.static(__dirname + '/public'));

//Express HBS engine
//Los partials van a ser partes de codigos que se podrán reutilizar
hbs.registerPartials(__dirname + '/views/partiarls');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('home', {nombre: 'kraToS!'});
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/data', (req, res) => {
	res.send('Hola Data');
});

app.listen(port, () => {
	console.log(`Escuchando peticiones en puerto ${port}`)
});