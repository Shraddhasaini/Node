const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('Hello World!! Hello Shraddha');
});

app.get('/api/courses', (req ,res) => {
  res.send(courses);
});

app.post('/api/courses',(req,res) =>{
  const { error } = validateCourse(req.body);//result.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return  res.status(404).send('No course ID found');
  //const result = validateCourse(req.body);
  const { error } = validateCourse(req.body);//result.error
  if (error) return res.status(400).send(error.details[0].message);


  course.name = req.body.name;
  res.send(course);

});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course,schema);
};







//app.put()
//app.delete()
app.get('/api/courses/:id ',(req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('No course ID found');  //404
  res.send(course);
});


app.delete('/api/courses/:id',(req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('No course ID found');
//delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);

});






// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port} `));
