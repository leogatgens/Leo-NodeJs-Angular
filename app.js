'use strict';
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;




app.use(express.static('public'));
app.set('views', 'src/views');

///EJEMPLO CON JADE
//app.set('view engine', 'jade');

///EJEMPLO CON HandleBars-express
//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({
//	extname: '.hbs'
//}));
app.set('view engine', 'ejs');




app.get('/', function (req, res) {
	res.render('index', {
		list: [{
			Link: '#one',
			Text: 'Historia'
		}, {
			Link: '#two',
			Text: 'Consumo responsable'
		}, {
			Link: '#three',
			Text: 'Fotos'
		}, {
			Link: '#four',
			Text: 'Atributos'
		}, {
			Link: '#last',
			Text: 'Contacto'
		}]
	});
});



app.listen(port, function (err) {
	console.log('running server on port ' + port);
});