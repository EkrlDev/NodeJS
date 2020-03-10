//console.log('hey ninjas!!!');
/* *************************
setTimeout(function(){
    console.log('3 second passet!!!')
 }, 3000);

 let time = 0;
 let timer = setInterval(function() {
     time += 2;
     console.log(time + 'seconds passed!');
     if(time > 10) {
         clearInterval(timer);
     }
 }, 2000);
*/
/******************************
console.log(__dirname);
console.log(__filename);
*/
/*******************************
//normal function statement
function sayHi(){
    console.log('hi!');
}
sayHi();

//function expression
let sayBye = function() {
    console.log('bye!');
}
sayBye();
*/
//let counter = require('./stuff');//we call the required module
//console.log(counter(['shaun', 'the', 'sheep']));

let stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'the', 'sheep']));//stuff points module.export object
console.log(stuff.adder(7,stuff.pi));