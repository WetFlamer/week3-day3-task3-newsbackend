const { Router } = require('express');
const  { categoryController } = require('../controllers/Category.controller');

const router = Router();

router.get('/', categoryController.getCategories);
router.post('/', categoryController.addCategories);
router.delete('/:categoryId', categoryController.deleteCategories);
module.exports = router;