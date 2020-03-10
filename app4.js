let fs = require('fs');

let readMe = fs.readFileSync('README.md', 'utf8');

console.log(readMe);

fs.writeFileSync('writeMe.txt', readMe);//it creates a writeMe.txt file and write the contents of README.md in to it. Both readFile and writeFile methods are syncronous
//Let's do it asyncronously

fs.readFile('README.md', 'utf8', function(err, data) {
    console.log(data);
    fs.writeFileSync('writeMeAsync.txt', data);//this is run asyncronous after the data readed from README.md
});

console.log('This is run before becouse readFile is asyncronous');

fs.unlink('writeMe.txt');//this is used for deleting files async.It gaves error when async why?