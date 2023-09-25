const users = require("../models/usersSchema");
const moment = require("moment");

exports.userpost = async(req, res) => {
    // console.log(req.body);
    const {firstname,lastname,email,mobile,gender,status} = req.body;

    if(!firstname || !lastname || !email,mobile || !gender || !status){
        res.status(400).json({error: "All inputs are required"});
    }
    try {
        const preuser = await users.findOne({email: email});
        if(preuser){
        res.status(400).json({error: "This email ID already exist "});
        }
    } catch (error) {
        
    }

}