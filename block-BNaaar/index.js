let http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to homepage');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('{message: this is a post request}'));
  }
}

server.listen(5000, () => {
  console.log('server listening on port 5000');
});
