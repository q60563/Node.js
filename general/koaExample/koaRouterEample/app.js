var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var router = new Router();

app.use(require('./router').middleware());
app.use(router.middleware());
app.listen(3000,function(){
    console.log('Already connected');
});
