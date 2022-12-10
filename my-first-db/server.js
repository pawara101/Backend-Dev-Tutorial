const express = require("express");
var db = require("./database");
const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Enable CORS
const cors = require("cors");
app.use(
    cors({
        exposedHeaders: ["Content-length","X-Foo","X-Bar"],
        credentials: true,
        origin: "*",
    })
);

//Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
  });

// HTTP GET Method
app.get("/api/products",(req,res,next) => {
    // SQL query to select all data
    try{
        var sql = "select * from products";
        var params =[];

        //Running the SQL query
        db.run(sql, params, (err, rows)=>{
            //Error response
            if (err) {
                res.status(400).json({ error: err.message});
                return;
            }

            //Success response
            res.status(200).json({
                message: "success",
                data: rows,
            });
        });
    } catch(E){
        res.status(400).send(E);
    }

});

//HTTP POST method
app.post("/api/products", (req,res, next) => {

    try{

        const {
            productName,
            description,
            unitPrice
        } = req.body;
    
        var sql = "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
        var params =[productName,description,unitPrice];

        //Running the SQL query
        db.run(sql, params, (err, result)=>{
            //Error response
            if (err) {
                res.status(400).json({ error: err.message});
                return;
            }

            //Success response
                else {res.status(200).json({
                message: "success",
                data: req.body,
            });
            }
        });
    } catch(E){
        res.status(400).send(E);
    }
});