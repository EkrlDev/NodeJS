let fs = require('fs');
//fs.mkdirSync('stuff');//create directory
//fs.rmdirSync('stuff');

fs.mkdir('stuff', function() {
    fs.readFile('writeMe.txt', 'utf8', function(err, data) {
        fs.writeFileSync('./stuff/writeMee.txt', data);//en içteki metodları sync yapmayınca hata veriyor neden?
    });
});

//fs.rmdir('stuff');//since it is not empty it will give an error

fs.unlink('./stuff/writeMee.txt', function() {
    fs.rmdirSync('stuff');//en içteki metodları sync yapmayınca hata veriyor neden?
});
