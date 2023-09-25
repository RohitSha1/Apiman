const users = require("../models/usersSchema");
const moment = require("moment");

exports.userpost = async(req, res) => {
    // console.log(req.body);
    const {firstname,lastname,email,mobile,gender,status} = req.body;

    if(firstname ||lastname ||email,mobile ||gender ||status)

}