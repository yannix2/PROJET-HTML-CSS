const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.header('access_token')
    if (!token) return res.status(401).json('access denied')
    try {
        const verifiedToken = jwt.verify(token,"azerty")
        req.verified=verifiedToken
        next(); 
    }
    catch (err) {
        return res.status(500).json(err)
    }
}