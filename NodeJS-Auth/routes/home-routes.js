const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');

router.get(('/welcome'),  authMiddleware ,(req, res) => {
    const userInfo = req.userInfo;
    res.json({
        success: true,
        message: "Welcome to the home page",
        user:{
            id: userInfo.id,
            username: userInfo.username,
            role: userInfo.role,
        }
    })
});
module.exports = router;