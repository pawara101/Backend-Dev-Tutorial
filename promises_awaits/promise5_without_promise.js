const fs = require('fs'); //for file system

console.log('START');

//without promise -- Asynchronuos
fs.readFile('cx1.txt',(err,data)=>{
    console.log(data.toString());
});
console.log('END')