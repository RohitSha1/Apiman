const express = require('express');
const router = new express.Router();


// routes
router.post("/user/register", controllers.userpost)



module.exports = router;