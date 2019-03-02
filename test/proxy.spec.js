const proxy = require('../proxy');
const assert = require('assert');
let server; 

before(done => {
  server = proxy('asdfsadfasdffs');
  done();
});

it('should start', function() {
  assert(server);
});

after(done => {
  server.close(done);
});