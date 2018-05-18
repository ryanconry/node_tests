const request = require('supertest');  //assertion testing express
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
  it('should return Hello World response', (done) => {   //done identifiies async test
    request(app)
      .get('/')     //.get for get request, param is url
      .expect((res) => {              //expect method of supertest
        expect(res.body).toInclude({error: 'page not found'})   //expect library
      })
      .expect(404)      //assertion test for status code
      .end(done);     //end test withd one
  });

  it('should return array of users',(done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({name: 'Ryan', age: 27})
      })
      .end(done)
  });
});
