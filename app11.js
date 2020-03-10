let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url)
    if(req.url === '/' || req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if(req.url === '/api/users') {
        let users = [{name: 'ryu', age:27}, {name: 'ken', age: 29}];
        res.writeHead(200, {'Content-Type': 'application/json'});//Attention!!! content type JSON
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
    //Here we are making routing among our pages and send data according to page requested 
    //This simple routing but it will be so diffucult if we have many pages
    //So for this purpose we are using express package and node package manager (npm)
});

server.listen(3000, '127.0.0.1');
console.log('you are listening port 3000 now');
