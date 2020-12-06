
const LoginController = require("../controllers/loginController")

var router = require("express").Router();


router.post('/login', (req, res) => {
    LoginController.login(req, res)
})

module.exports = router