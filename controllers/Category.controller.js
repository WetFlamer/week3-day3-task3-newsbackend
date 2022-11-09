const Category = require('../models/Category.model');

module.exports.categoryController = {
  getCategories: function (req, res) {
    res.json('all cats');
  },
  addCategories: function (req, res) {
    Category.create({
      name: req.body.name,
    }).then((category) => {
      res.json(category);
    });
  },
  deleteCategories: (req, res) => {
    Category.findByIdAndRemove(req.params.categoryId).then(category => {res.json(category)})
  }
};
