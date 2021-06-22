let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url, req.headers);

  res.end('welcome');
}

server.listen(3000, 'localhost', () => {
  console.log('server listening on port 3000');
});
