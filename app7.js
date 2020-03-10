let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//its gonna split the data and pste it in myReadStream as small chunks. Remove second parameter 'utf8' and see what happens.
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk) {//on means listen for a event. Event is called data. Every time we received data as a chunk  a callback function will be fired
    console.log('new chunk received: ', chunk);
    myWriteStream.write(chunk);
    //Now every once we received a chunk of data we then write it to the target file
})
//In this method we do not need to wait till all the data loaded from server

// There is actually quicker way of reading data and writing data in Node.Js by using "pipes"