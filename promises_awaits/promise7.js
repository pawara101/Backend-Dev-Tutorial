const fs = require('fs');
const util = require('util');

// with promise
var read = util.promisify(fs.readFile);
Promise.all([
    read('customer1.txt'),
    read('customer2.txt'),
    read('customer3.txt')
])

    .then(data =>{
        const [data1,data2,data3] = data

        console.log(data1.toString());
        console.log(data2.toString());
        console.log(data3.toString());
    })

    .catch(err => {
        console.log(err);
    });