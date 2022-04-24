const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors = require("cors");
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());



// connect mongo db


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9x7m2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const productCollection = client.db("emaJhoneDB").collection("products");
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);




// create api

app.get('/', (req, res) => {
    res.send('this is home api');

})

app.listen(port, (console.log('server is running and this port is ', port)));