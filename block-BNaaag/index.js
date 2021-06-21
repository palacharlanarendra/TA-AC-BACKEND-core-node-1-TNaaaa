let fs = require('fs');

fs.readFile('./content.md', (err, file) => {
  console.log(err, file.toString());
});

let buff1 = Buffer.alloc(10);
buff1.write('welcome HP!');
console.log(buff1.toString());
