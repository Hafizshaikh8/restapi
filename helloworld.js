//console.log("hello world");
const http = require('http');

const server=http.createServer((req,res)=>{
    res.end('hello world');

});

server.listen(4000, () =>{
    console.log('Server is running on http://localhost:4000');

});