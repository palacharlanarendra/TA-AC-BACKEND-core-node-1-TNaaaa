let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === '/') {
    console.log(req.method);
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url === '/about.html') {
    console.log(req.method);
    fs.createReadStream('./about.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile(__dirname + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'jpg') {
    // set header for css file
    res.setHeader('Content-Type', 'image/jpg');
    // read css file and send it in response
    fs.readFile(__dirname + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'js') {
    // set header for css file
    res.setHeader('Content-Type', 'text/javascript');
    // read css file and send it in response
    fs.readFile('./assets/js' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(5050, 'localhost', () => {
  console.log('server listening on port 5050');
});
