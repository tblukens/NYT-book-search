const router = require("express").Router();
const bookController = require('../../controllers/bookController')

router.route('/').get(bookController.showBooks)
router.route('/').post(bookController.saveBook)
router.route('/:id').delete(bookController.deleteBook)

module.exports = router;