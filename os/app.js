const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total Memory: ' + totalMem);

//template string
//ES6 or ES25

console.log(`Free Memory: ${freeMem}`);
