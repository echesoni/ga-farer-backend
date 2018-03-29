var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./Post');

var UserSchema = new Schema({
  name: String,
  password: String,
  // post: String
  user_post: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
