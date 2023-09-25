const mongoose = require('mongoose');

const validator = require('validator');

// creating users schema

const usersSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
                
            }
        }
    }
})