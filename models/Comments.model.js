const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  name: String,
  text: String,
  newId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comments',
  },

});
const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;