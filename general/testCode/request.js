var request = require('request');

request("http://127.0.0.1:3000", function(err, res, body){
	if(!err && res.statusCode == 200){
		console.log(body);
	}	
});

