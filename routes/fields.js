var Emails = require('../models/emails.js');

exports.get = function(req, res, next){
	Emails.find({}).select({ "sender": 1, "text":1, "_id": 0}).limit(10).exec(function(err, data){
		if(err){res.send('Error');}
		else {
			res.json(data);
		}
	});
	return next();
}