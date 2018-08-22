// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var user ={name:'rish',age:21};
// var {name}=user;       object example
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp')
  //
  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5b7d62bbb3fc5a28c5d6476c')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });



  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b79dae5626e137c0c73ea89')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });







  client.close();
  });
