// Create Promise without declairing
Promise.resolve("ABC")
    .then(value =>{
        console.log(value);
        return "good"
    })

    .then(value => {
        console.log(value)
    })
