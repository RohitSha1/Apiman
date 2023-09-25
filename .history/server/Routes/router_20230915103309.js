const express = require('express');
const router = new express.Router();
const controllers = re

// routes
router.post("/user/register", controllers.userpost);



module.exports = router;