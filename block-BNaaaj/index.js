console.log('Welcome to Nodejs');

let os = require('os');
let fs = require('fs');

console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());

fs.readFile ("content.js",(err,content)=>{

    console.log(content.toString(),err);
})

fs.unlink("example.md", (err => {
    if (err) console.log(err);
    else {
      console.log("\nDeleted file: example_file.txt");
    }
}));



