var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/3000");

module.exports.User = require("./User");
module.exports.Post = require("./Post");
module.exports.Location = require("./Location");
