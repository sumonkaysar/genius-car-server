const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.port || 5000;
const app = express()

// middle wares
app.use(cors())
app.use(express.json())

// MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zuoxzfe.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
  res.send('genious car server is running')
})

app.listen(port, () => {
  console.log("Genious car server is running on port", port);
})