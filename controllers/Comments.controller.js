const Comments = require('../models/Comments.model')
module.exports.commentsController = {
    getCommentsByNews: function (req, res) {
        Comments.find({ newId: req.params.newsId })
          .then((comment) => {
            res.json(comment);
          });
      },
    addComments: function (req, res) {
        Comments.create({
            
            name: req.body.name,
            text: req.body.text,
            newId: req.body.newId
          }).then(() => {
            res.json("Комментарий добавлен")
          })
    },
    deleteComment: function (req, res) {
        Comments.findByIdAndRemove(req.params.commentsId).then(comment => {res.json(comment)})
    },
  };