// Create Promise
const promise = new Promise((resolve,reject) =>{
    resolve('Success');
    //reject('Fail');
});

// Consumers
    promise.then(value => {
        console.log(value); //Success
        return "1";
    })

    .then(value => {
        
        console.log(value); //1
        return "2";
    })

    .then(value => {
        console.log(value); //2
        return "3";
    })

    .then(value => {
        throw "ERROR !!!" // due to throw argument this will direct to catch block the throwed argument will be printed out
        console.log(value);
        return "4";
    })

    .catch(err => {
        console.log(err);
    })