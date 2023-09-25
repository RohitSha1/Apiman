import { connect } from 'mongoose';

const DB = process.env.MONGO_URI;

connect(DB,{
    useUnifiedTopology: true,
    useNewUrlPraser: true,
}).then(()=>console.log("Apiman database connected successfully")).catch((err)=>{
    console.log("Error Check Conn", err);
})