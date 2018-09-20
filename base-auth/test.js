const app = require('./app');
const server = app.listen();
const request = require('supertest').agent(server);


request
.get('/')
.auth('tj', 'tobi')
.expect(200)
.expect('secret')
.end((err, res) => {
    if(err) throw err;
    console.log(res)
})
