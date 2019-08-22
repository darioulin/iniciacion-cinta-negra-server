const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: schema.Types.ObjectId,
    ref: 'comments'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

module.exports = postSchema;
