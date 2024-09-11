const http = require('http'); 

module.exports = http;

const server = http.createServer((req, res) => {

    res.end();
});

server.listen(3000, () => {
    console.log("Server is Running.");
});
