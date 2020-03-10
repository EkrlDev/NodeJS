/*
let counter = function(arr) {
    return `This array has ${arr.length} elements`
};

let adder = function(a,b) {
    return `The sum of two number is ${a + b}`
};

let pi = 3.142;
*/
//module.exports = counter; //we made this function available outside of the module
//module.exports return an object so to difene more functios and properties we can use below
//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = pi;
//or
/*
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
*/
//but there is a easy way

module.exports.counter = function(arr) {
    return `This array has ${arr.length} elements`
};

module.exports.adder = function(a,b) {
    return `The sum of two number is ${a + b}`
};

module.exports.pi = 3.142;