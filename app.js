/*var express = require('express');
var app = express();

var port = '5000';

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function (req, res) {
    res.send('Hello Leo como estas?');
});


app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});*/

var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);