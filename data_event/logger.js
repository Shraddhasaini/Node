const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

function log(message) {
  //send an HTTP request
  console.log(message);

  emitter.emit('messageLogged',{id: 1,url:'http://'} );

}


module.exports = log;
//module.exports.endPoint = url; //also can call diff name
//private
