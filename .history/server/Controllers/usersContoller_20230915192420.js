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
exports.getUsers = async(req, res)=>{
    try {
        // using find for getting user all data or use finOne() for getting desired data.
        const userData = await users.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Catch block (get) error");
    }
}

// To get single user
exports.getSingleuser = async(req, res)=>{
    const {id} = req.params;
    try {
        const singleUserData = await users.findOne({_id:id});
        res.status(200).json(singleUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Catch block (get single user) error");
    }
}
exports.deleteuser(req, res)