const { Router } = require('express');

const router = Router();

router.use('/news', require('./News.route'));
router.use('/category', require('./Category.route'));
router.use('/comments', require('./Comments.route'));
module.exports = router;
