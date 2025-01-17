var restify = require('restify');
var server = restify.createServer();
var port = 8088;

// /blogs/posts/comments/
//
// CRUD   | mongoDB   | REST
// -------|-----------|------
// create | insert    | POST
// read   | find      | GET
// update | update    | PUT
// delete | remove    | DELETE
//

function send(req, res, next) {
	res.send("Testing" + req.params.test);
	return next;
}

server.get('/', function (req, res, next) {
	res.send("Hello World" + req);
	next();
});
server.get('/hello/:firstname/:lastname', function(req, res, next) {
	res.send('Hello ' + req.params.firstname + " - " + req.params.lastname);
	next();
});

server.listen(port, function() {
	console.log('%s listening at %s', server.name, port);
});