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

server.get('/', send);
server.get('/hello/:name', send);
server.put('/hello/:name', send);
server.POST('/hello/:stuff', function(req, res, next) {
	res.send(201, req.params.test + "'s random String is: " +
		Math.random().toString(36).substr(3,8));
	return next();
});

server.listen(port, function() {
	console.log('%s listening at %s', server.name, port);
});