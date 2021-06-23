let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);

  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Welcome to homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end('{"message": "this is a post request"}');
  }
}

server.listen(5000, () => {
  console.log('listening to the port 5k');
});
