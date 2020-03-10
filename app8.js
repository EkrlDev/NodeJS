//In order to wait for event 'data' for receiving data and writing it to a file, we make them automaticly with "pipes"

let http = require('http');
let fs = require('fs');

//let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.pipe(myWriteStream);//it is doing exactly the same thing. Lets apply it on a server

let server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
    
});

server.listen(3000, '127.0.0.1');
console.log('you are listening port 3000 now');
//When we open the browser we see the text there at http://localhost:3000/