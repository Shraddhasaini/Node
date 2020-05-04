console.log(__filename);
console.log(__dirname);


var url = 'http://mylogger.io/log';

function log(message) {
  //send an HTTP request
  console.log(message);
}

module.exports.log = log;
//module.exports.endPoint = url; //also can call diff name
//private
