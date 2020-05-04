const EventEmitter = require('events');



const Logger = require('./logger');
const logger = new Logger();


logger.on('messageLogged',(arg)=>{//e, eventArg
  console.log('Listener Called',arg);
});

logger.log('message');
