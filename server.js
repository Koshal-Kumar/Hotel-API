const express = require('express')
const app = express()

const db = require('./db')


const bodyParser = require('body-parser')
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })


const personRoutes = require("./routes/personRoutes.js") 
app.use("/person" ,personRoutes);

const menuRoutes = require("./routes/menuRoutes.js")
app.use("/menu", menuRoutes);



app.listen(3000);