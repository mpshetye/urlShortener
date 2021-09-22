const router = require('express').Router();
const urlShortenerController = require('../controller/URLShortenerController');

router.post('/shorten', urlShortenerController.urlShortpost);
router.get('/:id', urlShortenerController.urlShortget);

module.exports = router;