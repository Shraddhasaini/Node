const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!! Hello Shraddha');
});
//app.post()
//app.put()
//app.delete()
app.get('/api/courses',(req,res) => {
  res.send([1,2,3]);
});

// /api/courses/1
app.get('/api/posts/:year/:month', (req ,res) => {
  res.send(req.query);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port} `));
