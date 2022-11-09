const News = require('../models/News.model')
module.exports.newsController = {
    getNews: function (req, res) {
      News.find().then(news => {res.json(news)})
    },
    getNewsById: (req, res) => {
      News.findById(req.params.newsId).then(news => {
        res.json(news);
    })
  },
  getNewsByCat: function (req, res) {
    News.find({ category: req.params.categoryId })
      .populate('category')
      .then((news) => {
        res.json(news);
      });
  },
    addNews: function (req, res) {
        News.create({
            tittle: req.body.tittle,
            text: req.body.text,
            category: req.body.category 
          }).then(() => {
            res.json("Новость добавлена")
          })
    },
    deleteNews: function (req, res) {
      News.findByIdAndRemove(req.params.newsId).then(news => {res.json(news)})
    },
    
    updateNews: function (req, res) {
      News.findByIdAndUpdate(
        req.params.newsId, {
            tittle: req.body.name,
            text: req.body.text,
            category: req.body.category

      },
      {new: true}).then(news => {res.json(news)})
    },
  };