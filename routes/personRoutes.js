const express = require('express')
const router = express.Router()

const Person = require('../person')


router.post('/' ,async (req, res) => {
 
    try{
      const  data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      res.status(200).json(response)
    }
    catch(err){
      console.log(err)
    }
  
  })
  
  
router.get('/' , async (req, res) => {
    try{
      const data = await Person.find();
      console.log('data printed sucessfully')
  
      res.status(200).json(data);
    }
    catch(err){
      console.log(err)
      res.status(500).send('server error')
      
    }
  })

  module.exports = router;