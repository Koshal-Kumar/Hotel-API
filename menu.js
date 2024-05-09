const express = require('express');
const  mongoose = require('mongoose');


const menuItemSchema =new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    isDrink: {
        type :Boolean,
        required : true,
        default : false
    },
    ingredients: {
        type : [String],
        default : []
    },
    numSales : {
        type : Number,
        required : true,
        default : 0
    },
})

const MenuItem = mongoose.model('MenuItem' , menuItemSchema)

module.exports = MenuItem;