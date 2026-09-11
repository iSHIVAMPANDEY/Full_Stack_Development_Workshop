const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}`);
});

myEmitter.on('exit', (code) => {
    console.log(`Exit event received, ${code}`);
});

myEmitter.emit('greet', 'B.Tech students');
myEmitter.emit('exit', '0');