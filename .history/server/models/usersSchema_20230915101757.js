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
                throw Error("Invalid Email")
            }
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength:10,
        maxlength:10
    },
    gender{
        type:String,
        required: true,
    }
})