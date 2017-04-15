exports.get = function(req, res, next){
	fs.readFile('index.html', function(err, data){
		if(err){
			console.log("Cannot read file index.html");
			res.send(404);
		} else {

		}
		}
	})
}