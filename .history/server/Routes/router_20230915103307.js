const express = require('express');
const router = new express.Router();
const controllers = 

// routes
router.post("/user/register", controllers.userpost);



module.exports = router;