const fs = require('fs');

console.log('START');

//without promise -- Asynchronuos
/*fs.readFile('cx1.txt',(err,data)=>{
    console.log(data.toString());
});*/


//With Promise
new Promise((resolve,reject)=>{
    fs.readFile('cx1.txt',(err,data)=> {
        if (err){
            reject(err)
        }
        else{
            resolve(data)
        }
    });
})

    .then(data => {
        console.log(data.toString());
    })

    .catch(err => {
        console.log(err);
    });


console.log('END')