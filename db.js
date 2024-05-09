const mongoose = require('mongoose')


//define mongoDB connection

const mongoURL = 'mongodb://localhost:27017/nodeData'

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology :true
})

const db = mongoose.connection;


// add event listeners on the db

db.on('connected', ()=>{
    console.log('connected to the database');
})
db.on('error', (err)=>{
    console.log('MongoDB connnection  error' + err);
})
db.on('disconnected', ()=>{
    console.log('disconnected from the database');
})

// Export the  db objexct

module.exports = db;
