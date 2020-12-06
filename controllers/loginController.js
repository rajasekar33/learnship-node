
const jwt = require('jsonwebtoken');
const db = require("../model");
const User = db.users;

module.exports = {

    login : async (req, res) => {

        const { userName, password } = req.body;

        if(!userName || !password){
            res.status(400).send({
                message: "Username or password is missing"
              });
              return;
        }

        const user = await User.findOne({ where: { userName: userName, password:  password} });

        if (user) {
            const accessToken = jwt.sign({ username: user.userName,  role: user.role }, accessTokenSecret);
            res.json({
                user: user,
                accessToken: accessToken
            });
        } else {
            res.send('Username or password incorrect');
        }
        }
}