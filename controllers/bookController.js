// Require all models
var db = require('../models');

module.exports = {
  showBooks: function(req, res) {
    db.Book.find({})
    .then(docs => res.send(docs))
    .catch(err => console.log(err))
  },
  saveBook: function(req, res) {
    console.log(req.body)
    db.Book.create(req.body)
    .then(dbBook => res.send(dbBook))
    .catch(err => console.log(err))
  },
  deleteBook: function(req, res) {
    db.Book.findByIdAndDelete(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  }
};
