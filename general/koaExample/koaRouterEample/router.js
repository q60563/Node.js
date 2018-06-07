var Router = require('koa-router');
var contrallers = require('./contrallers');
var router = new Router();

router.get('/',contrallers.hello);

module.exports = router;