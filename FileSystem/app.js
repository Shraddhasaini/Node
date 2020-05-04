const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

//ascync
//prefer
fs.readdir('./', function(err,files){
  //error "./" --> "$"

  if (err) console.log('Error', err);
  else console.log('Result', files);
});
