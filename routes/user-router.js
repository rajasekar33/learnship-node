const userController = require('../controllers/userController');
var router = require("express").Router();

const auth = require('../utils/authHeader').authenticateJWT;


router.post('/', auth, (req, res) => {
    userController.create(req, res)
})

router.put('/:id', auth, (req, res) => {
    userController.update(req, res)
})

router.get('/', auth, (req, res) => {
    userController.findAll(req, res)
})

router.get('/:id', auth, (req, res) => {
    userController.findOne(req, res)
})

router.delete('/:id', auth, (req, res) => {
    userController.delete(req, res)
})

module.exports = router;