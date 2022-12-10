const fetch = require('node-fetch');

const link = 'https://reqres.in/api/users?page=2'

// fetch actually produces a promise
fetch(link)
    .then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });