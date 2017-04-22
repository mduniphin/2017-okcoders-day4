var restify = require('restify');
var server = restify.createServer();
var port = 8088;

var hello = require('./routes/hello.js');
var emails = require('./routes/emails.js');
var client = require('./client');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/enron')
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log("Mongoose connection established");
});

// Client
server.get('/', client.get);

// Server responses
server.get('/emails', emails.get);
server.get('/hello/:name', hello.send);
server.put('/hello/:name', hello.send);
server.post('/hello/:name', hello.post);
server.del('/hello/:name', hello.del);

server.listen(port, function(){
	console.log('%s listening at %s', server.name, port);
});