const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('get request', (done) => {
    const url = 'http://localhost:7865';
    const method = 'GET';
    request(url, method, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
