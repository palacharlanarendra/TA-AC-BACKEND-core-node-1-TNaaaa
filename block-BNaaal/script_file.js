// 1. create a basic node server using http module's createServer method and add a listener on port 4000.
// 2. start the server using script writer i.e. `node script_file.js`
// 2. open the browser and request your server on url `http://localhost:4000`.
// 3. notice the output in browser and terminal.

let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Welcome');
}

server.listen(4000, 'localhost', () => {
  console.log('server is listening on 4000 port');
});
