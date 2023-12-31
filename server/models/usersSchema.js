const mongoose = require('mongoose');

const validator = require('validator');

// creating users schema

const usersSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
    },
    lastname:{
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
    mobile:{
        type: String,
        required: true,
        unique: true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        enum:["Active","In-Active"],
        default:"Active"
    },
    dateCreated:Date,
    dateUpdated:Date
});

// model defining
const users = new mongoose.model("users", usersSchema);

module.exports = users;