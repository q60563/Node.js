const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const Router = require('koa-router');
const router = Router();

const app = new Koa()

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

router.get('/', async(ctx) => {
    ctx.body = 'Hello World';
});

router.get('/about', async(ctx) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
});

app.use(router.routes());

app.listen(3000);