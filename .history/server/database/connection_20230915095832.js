const mongoose = require('mongoose');

const DB = process.env.MONGO_URI;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlPraser: true,
}).then(()=>console.log)