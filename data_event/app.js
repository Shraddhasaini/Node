const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged',(arg)=>{//e, eventArg
  console.log('Listener Called',arg);
});

const log = require('./logger');
log('message');
