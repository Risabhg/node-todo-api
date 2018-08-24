var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');
var{ObjectId}=require('mongodb');
var express=require('express');
var bodyparser=require('body-parser');
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });


//
// var user = new User({
//   email: 'rishabh@example.com   '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
//this all content is not needed now
var app = express();
const port=process.env.PORT||3000;
app.use(bodyparser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
app.get('/todos/:id',(req,res)=>
{
  var id=req.params.id;
if(!ObjectId.isValid(id)){
  return res.status(404).send();
}
Todo.findById(id).then((todo)=>
{
if(!todo)
{
  return res.status(404).send();
}
res.send({todo});
}).catch((e)=>
{
  res.status(404).send();
});
});

app.listen(port, () => {
  console.log(`connected to port${port}`);
});

module.exports = {app};
