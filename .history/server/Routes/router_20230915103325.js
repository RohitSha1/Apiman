const express = require('express');
const router = new express.Router();
const controllers = require('../Controllers/usersContoller')

// routes
router.post("/user/register", controllers.userpost);



module.exports = router;