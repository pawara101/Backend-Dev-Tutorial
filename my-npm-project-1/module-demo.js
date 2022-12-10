const http = require("http");
let ascii_text_generator = require('ascii-text-generator');
let input_text = "PAWARA";
let ascii_text =ascii_text_generator(input_text,"2");
 
const server = http.createServer((req, res) => {

    res.end(ascii_text);
});

server.listen(8080,"localhost",() => {

    console.log('Node js is on 8080 port now')

});