var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  // for seeding purposes only
  title: String,
  location: String,
  post_description: String
  // location: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
  // post_description: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
