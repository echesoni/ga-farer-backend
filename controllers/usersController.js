var db = require('../models/index');

module.exports = {
  index: function(req,res){
    db.User.find({}, function(err, allUsers){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allUsers: \n", allUsers)
      res.json({"users": allUsers})
    });
  },

  // show: function(req,res){
  //   var userId = req.params.id;
  //   db.User.findOne({_id: userId})
  //     .populate('posts')
  //     .exec(function(err, foundUser) {
  //       if(err){res.status(500).json({"ERROR":"Database Error"});}
  //       console.log("foundUser: \n", foundUser);
  //       res.status(200).json({"user": foundUser});
  //     });
  // },

  show: function(req,res){
    var userId = req.params.id;
    db.user.findOne({_id: userId}, function(err, foundUser){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("foundUser: \n", foundUser);
      res.status(200).json({"user": foundUser});
    });
  },

  create: function(req, res){
    var newUser = req.body;
    db.user.create(newUser, function(err, newUser){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newUser: \n", newUser);
      res.status(200).json({"user": newUser});
    });
  },

  update: function(req, res){
    var updatedUser = req.body;
    var userId = req.params.id
    db.user.findOneAndUpdate({_id: userId}, updatedUser, {new:true}, function(err, updatedUser){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedUser: \n", updatedUser);
      res.status(200).json({"user": updatedUser});
    });
  },

  destroy: function(req, res){
    var userId = req.params.id
    db.user.remove({_id: userId}, function(err, removedUser){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedUser: \n", removedUser);
      res.status(200).json({"user": removedUser});
    });
  }
  
};
