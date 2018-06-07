var koa = require('koa');
var app = koa();

app.use(function* responseTime(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

app.use(function* logger(next){
  var start = new Date;
  yield next;
  var used = new Date - start;
  console.log('%s %s %s %sms',
    this.method,
    this.originalUrl,
    this.status, used);
});

app.use(function* contentLength(next){
  yield next;
  if(!this.body) return;
  this.set('Content-Length', this.body.length);
});

app.use(function* body(next){
  yield next;
  if(this.path !== '/') return;
  this.body = 'Hello World';
});

app.listen(3000);
