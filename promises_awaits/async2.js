const fetch = require('node-fetch');

// returns a promise
const loadDataFunction = async() =>{
    const link = 'https://reqres.in/api/users?page=2';

    try{
        const response = await fetch(link);
        const data = await response.json();

        return data;
    }catch(error){
        console.log(error);
    }
};


loadDataFunction().then(data =>{
    console.log(data);
});