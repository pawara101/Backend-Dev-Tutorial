/* Non-Blocking example */

// Here we are doing reading an external text file.
var fs = require("fs") // import filesystem module

//asynchrounusly read file system
fs.readFile("external.txt",function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});

fs.readFile("input.txt",function(err,data){
    if (err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});


// Here we are going to see 'Program Ended' then the file strings. 
// That is because of the callback(Asynchronous function).
