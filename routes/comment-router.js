
const commentController = require('../controllers/commentController');

var router = require("express").Router();


router.post('/', (req, res) => {
    commentController.create(req, res)
})

router.put('/', (req, res) => {
    commentController.update(req, res)
})

router.get('/', (req, res) => {
    commentController.findAll(req, res)
})

router.get('/:id', (req, res) => {
    commentController.findOne(req, res)
})

router.delete('/:id', (req, res) => {
    commentController.delete(req, res)
})

module.exports = router;