const EventEmitter = require('events');
//class bc caps
const emitter = new EventEmitter();
//Register listener
//before calling
emitter.on('messageLogged',function(){
  console.log('Listener Called');
});
//Raise an event
emitter.emit('messageLogged'); // nothing happened
