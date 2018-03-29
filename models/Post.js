var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  location: String,
  // title: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  // location: [{ type: Schema.Types.ObjectId, ref: 'Location' }]
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
