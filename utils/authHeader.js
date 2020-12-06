const jwt = require('jsonwebtoken');

module.exports = {

     authenticateJWT : (req, res, next) => {
        const authHeader = req.headers.authorization;
    
        if (authHeader) {    
            jwt.verify(authHeader, accessTokenSecret, (err, user) => {
                console.log(err, user)
                if (err || user.role !== "admin") {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    }
}