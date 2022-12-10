// Declare a Promise
const promise = new Promise((resolve,reject) =>{
    //resolve('Success');
    reject('Fail');
});

//Consumers
promise.then((value) => {
        console.log(value);
    })
.catch((error) => {
        console.log(error);
    });