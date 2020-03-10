let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let myObj = {
        name:'Ryu',
        job:'Ninja',
        age:29
    };
    res.end(JSON.stringify(myObj));
});
// Here we served an html web page instead of plain text
server.listen(3000, '127.0.0.1');
console.log('you are listening port 3000 now');
