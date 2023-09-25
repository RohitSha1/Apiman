const express = require('express');
const router = new express.Router();
const controllers = require('../Controllers/usersContoller');

// routes
router.post("/user/register", controllers.userpost);
router.get("/user/getAlluser", controllers.getUsers);
router.get("/user/single")



module.exports = router;