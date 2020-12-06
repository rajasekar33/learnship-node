const blogController = require('../controllers/blogContoller');
const auth = require('../utils/authHeader').authenticateJWT;

var router = require("express").Router();


router.post('/', auth, (req, res) => {
    blogController.create(req, res)
})

router.put('/:id', auth, (req, res) => {
    blogController.update(req, res)
})

router.get('/', (req, res) => {
    blogController.findAll(req, res)
})

router.get('/:id', (req, res) => {
    blogController.findOne(req, res)
})

router.delete('/:id', auth, (req, res) => {
    blogController.delete(req, res)
})

module.exports = router;