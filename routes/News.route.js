const { Router } = require('express');
const  { newsController } = require('../controllers/News.controller');

const router = Router();

router.get('/', newsController.getNews);
router.get('/:newsId', newsController.getNewsById);
router.get('/category/:categoryId', newsController.getNewsByCat);
router.post('/', newsController.addNews);
router.delete('/:newsId', newsController.deleteNews);
router.patch('/:newsId', newsController.updateNews);

module.exports = router;