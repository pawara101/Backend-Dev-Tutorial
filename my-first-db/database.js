// configure DB connection
const { Database } = require("sqlite3");

var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE,(err) => {
    if (err) {
        //
        console.error(err.message);
        throw err;
    } else {
        console.log("Connected to the SQlite database.");

        db.run(
            `CREATE TABLE products(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                productName text,
                description text,
                unitPrice INTEGER
            )`,
            (err) => {
                if (err){
                    // Table already created
                } else {
                    //Table just created, creating some rows
                    var insert = 
                    "INSERT INTO products (productName,description,unitPrice) VALUES (?,?,?)";
                    db.run(insert,[
                        "White Basmathi Rice",
                        "Good Rice from Pakistan",
                        200,
                        ]);
                }
            }
        )
    }
}
);

module.exports = db;