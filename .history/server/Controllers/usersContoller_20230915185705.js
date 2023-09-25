const users = require("../models/usersSchema");
const moment = require("moment");

// Create (Register) user
exports.userpost = async(req, res) => {
    // console.log(req.body);
    const {firstname,lastname,email,mobile,gender,status} = req.body;

    if(!firstname || !lastname || !email || !mobile || !gender || !status){
        res.status(400).json({error: "All inputs are required"});
    }
    try {
        const preuser = await users.findOne({email: email});
        if(preuser){
        res.status(400).json({error: "This email ID already exist in the database"});
        }else{
            const dateCreate = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

            const userData = new users({
                firstname, lastname, email, mobile, gender, status, dateCreated:dateCreate
            });

            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("Catch block error");
    }

}

// Get All users
exports.getUsers(req, res)=>{

}