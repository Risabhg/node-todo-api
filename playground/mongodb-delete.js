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

  db.collection('Todos').deleteMany({text: 'Bird flying'}).then((result) => {
      console.log(result);
    });

    db.collection('Todos').deleteOne({text: 'Another example'}).then((result) => {
        console.log(result);
      });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);



  db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  });




  client.close();
  });
