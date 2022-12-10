const fs = require('fs');

console.log('START');

//without promise -- Asynchronuos
fs.readFile('cx1.txt',(err,data)=>{
    console.log(data.toString());
});

console.log('END')

//With Promise
new Promise((resolve,reject)=>{
    
})