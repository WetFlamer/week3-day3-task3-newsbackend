const { Router } = require('express');
const  { commentsController } = require('../controllers/Comments.controller');

const router = Router();

router.get('/:newsId', commentsController. getCommentsByNews);
router.post('/:newId', commentsController.addComments);
router.delete('/:commentsId', commentsController.deleteComment);

module.exports = router;