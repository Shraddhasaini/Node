const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged',(arg)=>{//e, eventArg
  console.log('Listener Called',arg);
});
emitter.emit('messageLogged',{id: 1,url:'http://'} );
//arrow func
//Raise logging(data:message)
