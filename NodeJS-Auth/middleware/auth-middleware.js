
const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }
    try{
        const extractToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(extractToken);

        req.userInfo = extractToken;
        next();
    }catch(err){
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
    
};
module.exports = authMiddleware;