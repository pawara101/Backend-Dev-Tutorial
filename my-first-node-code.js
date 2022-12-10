
const http = require("http");//Requiring thr HTTP modu;w


// Create the web server
const server = http.createServer((req, res) => {
    res.end("Hello Pawara");
});

// Listning the HTTP connection
server.listen(3000,"localhost",() => {
    console.log('Node js is on 7000 port now')
});