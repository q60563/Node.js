var mysql = require("mysql");

var connection = mysql.createConnection({
  host: '163.17.136.51',
  user: 'ajax105',
  password: 'ajax105',
  database: 'ajax105_1410232019'
});

connection.connect(function(err){
  if(err) console.log(err);
});

connection.query('SELECT * FROM `user`',function(err, results, fields){
  if(err) throw err;
  console.log(results);
});

connection.end();
