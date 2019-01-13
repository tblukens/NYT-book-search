const router = require('express').Router();
const google = require('../../controllers/googleController')

router.route('/').post(google.bookSearch)

module.exports = router;