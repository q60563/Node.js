var mongo = require('mongodb');												
var Server = mongo.Server;																				
var Db=mongo.Db;																			

var server = new Server('localhost',27017,{auto_reconnect:true});
var db = new Db('test',server);

exports.one = function(result){
  db.open(function(err,db){
    db.collection('users',function(err,collection){										  
		  var doc = {'uid':'001','data':result.data};						 
      collection.insert(doc);
	  });
    db.close();
  });
};

exports.two = function(result){
  db.open(function(err,db){
    db.collection('users',function(err,collection){										  
	    var doc = {'uid':'002','data':result.data};						 
      collection.insert(doc);
    });
    db.close();
  });
};	

exports.three = function(result){
  db.open(function(err,db){
    db.collection('users',function(err,collection){										  
		  var doc = {'uid':'003','data':result.data};						 
      collection.insert(doc);
	  });
    db.close();
  });
};			
