const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });       //remove all collections from database

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b837a00621d620f8407910a').then((todo) => {
console.log(todo);
});


Todo.findOneAndRemove({_id: '5b837a00621d620f8407910a'}).then((todo) => {
console.log(todo);
});
