var restify = require('restify');
var server = restify.createServer();
var port = 8088;

var hello = require('./routes/hello.js');
var client = require('./client');
var Emails = require('./models/emails.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log("Mongoose connection established");
});

function getEmails(req, res, next){
	Emails.find({}).limit(10).exec(function(err, data){
		if(err){res.send('Error');}
		else {
			res.json(data);
		}
	});
	return next();
}

// Client
server.get('/', client.get);

// Server responses
server.get('/emails', getEmails);
server.get('/hello/:name', hello.send);
server.put('/hello/:name', hello.send);
server.post('/hello/:name', hello.post);
server.del('hello/:name', hello.del);

server.listen(port, function() {
	console.log('%s listening at %s', server.name, port);
});