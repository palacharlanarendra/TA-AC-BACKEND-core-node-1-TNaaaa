// Create a http server and use readFile and createReadStream to read a file and send the data into response.
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      console.log(content);
      res.end(content);
    });
  }
  if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('listening to the port 5555');
});
