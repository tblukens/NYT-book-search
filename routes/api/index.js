const router = require('express').Router();
const bookRoutes = require('./book')
const google = require('./google')

router.use('/books', bookRoutes);
router.use('/google', google)
module.exports = router;
