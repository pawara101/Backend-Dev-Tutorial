const express = require("express");

const app =express();

// app.METHOD(PATH, HANDLER)
app.get("/a/cool/route/path",function(req,res){
    res.send('accessed the path');
    console.log('Accessed ');
}
);
app.listen(3000);