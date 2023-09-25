const express = require('express');
const router = new express.Router();
const controllers = requi

// routes
router.post("/user/register", controllers.userpost);



module.exports = router;