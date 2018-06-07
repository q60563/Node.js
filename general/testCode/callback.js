var a = function(result,callback){
	callback(result+2);
};

var b = function(data){
	console.log(data);
};

a(5,function(abc){
	b(abc);
});


