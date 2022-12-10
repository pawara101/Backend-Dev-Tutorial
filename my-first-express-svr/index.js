// Require express code
const express = require("express");

// Initialize express -- neccesary step
const app = express();

// define the route
app.get("/hello",(req,res) => {
    res.send("Hello world"); // response
});

app.listen(3000);// listen on port 300