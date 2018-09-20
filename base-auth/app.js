const Koa = require('koa');
const auth = require('koa-basic-auth');

const app = module.exports = new Koa();

// 401 处理
app.use(async (ctx, next) => {
    try {
        await next();
    } catch(err) {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.set('WWW-Authenicate', 'Basic');
            ctx.body = 'cant haz that';
        } else {
            throw err;
        }
    }
});

// require auth
app.use(auth({name: 'tj', pass: 'tobi'}));

// secret response
app.use(async (ctx) => {
    ctx.body = 'secret';
});

app.listen(3000);

