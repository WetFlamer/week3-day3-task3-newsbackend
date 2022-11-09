const { Router } = require('express');

const router = Router();

router.use('/news', require('./News.route'));
router.use('/category', require('./Category.route'));
module.exports = router;
