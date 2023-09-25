const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("Apiman database connected successfully")).catch((err)=>{
    console.log("Error Check Conn", err);
})