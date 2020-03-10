let http = require('http');//http module

let server = http.createServer(function(req, res) {//this function will be fired when we made a request
    res.writeHead(200, {'Content-Type': 'text/plain'});//we created a response header. First parameter is status and the second is content type.
    res.end('hey Ninjas!!!');//we ended response with body
});

server.listen(3000, '127.0.0.1');//we define port and IP. Since it is a local server it should be '127.0.0.1'
console.log('you are listening port 3000 now');//lets make a request via opening localServer page.First run the app6 at terminal then we write the browser http://localhost:3000/ and tata!!!