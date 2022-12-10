const fs = require('fs');
const util = require('util');//support internal APIs

// Without promises
fs.readFile('customer1.txt', (err, data) => {
    console.log(data.toString());
});

// With promise -- using util
var read = util.promisify(fs.readFile);
read('customer1.txt')
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => alert(err));