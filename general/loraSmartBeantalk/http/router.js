var Router = require('koa-router');
var contrallers = require('./contraller');
var router = new Router();

router.get('/',contrallers.home);
router.post('/one',contrallers.one);
router.post('/two',contrallers.two);
router.post('/three',contrallers.three);

module.exports = router;