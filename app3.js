let events = require('events');
let util = require('util');//allows us to inherit certain things from object built-in

let Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);//any person created by using Person constructor will inherit eventEmitter from events

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu];

people.forEach(function(person) {
    person.on('speak', function(mssg) {//when person emit speak event this function will be called we attached speak event to all person in the array
        console.log(`${person.name} said ${mssg}`)
    });
});

james.emit('speak', 'hey dudes!!');
ryu.emit('speak', 'I want curry');