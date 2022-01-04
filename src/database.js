
const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI ;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('connected successfully')
  client.close();
});

module.exports = client;
