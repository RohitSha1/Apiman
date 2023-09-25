const mongoose = require('mongoose');

const DB = process.env.MONGO_URI;

mongoose.connect(DB,{
    use
})