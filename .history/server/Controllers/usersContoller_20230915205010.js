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
    const search = req.query.search || "";
    const status = req.query.status || "";
    const gender = req.query.gender || "";
    const sort = req.query.sort || "";
    const page = req.query.page || 1;
    const ITEM_PER_PAGE = req.query.page || 1;

    const query = {
        firstname:{$regex:search,$options:"i"}
    }

    if(status !== "All"){
        query.status = status;
    };
    if(gender !== "All"){
        query.gender = gender;
    };

    try {
        // skip
        const skip = (page -1) *

        // using find for getting user all data or use finOne() for getting desired data.
        const userData = await users.find(query)
        .sort({dateCreated:sort == "new" ? -1 :1});
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
exports.deleteuser = async (req, res)=>{
    const {id} = req.params;

    try {
        const deleteUserData = await users.findByIdAndDelete({_id:id});

        res.status(200).json(deleteUserData);
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Catch block (delete user) error");
    }
}
// update user
exports.updateUser = async (req, res)=>{
    const {id} = req.params;
    const {firstname,lastname,email,mobile,gender,status} = req.body;
    try {
        const dateUpdate = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

        const updateUserData = await users.findByIdAndUpdate({_id:id},{
            firstname, lastname, email, mobile, gender, status, dateUpdated:dateUpdate
        }, {new:true});

        await updateUserData.save();

        res.status(200).json(updateUserData);
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Catch block (update user) error");
    }
}