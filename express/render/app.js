var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index',function(req,res){
  console.log('test index');
  res.render('index');
});

app.post('/admin',function(req,res){
  console.log('test admin');
  var p = req.body;
  console.log(p);
  res.render('admin',{data:p});
});

module.exports = app;