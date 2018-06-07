var koa = require('koa');
var Router = require('koa-router');
var json = require('koa-json');
var bodyParser = require('koa-bodyparser');

var app = koa();
var router = new Router();

app.use(json());
app.use(bodyParser());
app.use(require('./http/router').middleware());
app.use(router.middleware());
app.listen(3000,function(){
  console.log('Connected!!!');
});
