const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());



// create api

app.get('/', (req, res) => {
    res.send('this is home api');

})

app.listen(port, (console.log('server is running and this port is ', port)));