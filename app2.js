let events = require('events')//this is a built-in module in Node js we use this for creating custom events

let myEmitter = new events.EventEmitter;

myEmitter.on('someEvent', function(mesage){
    console.log(mesage);
})//when someEvent occured myFunction will be called

myEmitter.emit('someEvent', 'the event was emitted');//emit takes two parameter the function pre defined and parameter of that function. Here we manually emitted the someEvent event.