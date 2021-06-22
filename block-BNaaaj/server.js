let url = require('url');

let parsedURL = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit',true);

console.log(parsedURL);
console.log(parsedURL.pathname);
console.log(parsedURL.protocol);





