var db = require('../models/index');

module.exports = {
  index: function(req,res){
    db.Location.find({}, function(err, allLocations){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allLocations: \n", allLocations)
      res.json({"locations": allLocations})
    });
  },

  show: function(req,res){
    var locationId = req.params.id;
    db.user.findOne({_id: locationId}, function(err, foundLocation){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("foundLocation: \n", foundLocation);
      res.status(200).json({"location": foundLocation});
    });
  },

  create: function(req, res){
    var newLocation = req.body;
    db.user.create(newLocation, function(err, newLocation){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newLocation: \n", newLocation);
      res.status(200).json({"location": newLocation});
    });
  },

  update: function(req, res){
    var updatedLocation = req.body;
    var locationId = req.params.id
    db.post.findOneAndUpdate({_id: locationId}, updatedLocation, {new:true}, function(err, updatedLocation){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedLocation: \n", updatedLocation);
      res.status(200).json({"location": updatedLocation});
    });
  },

  destroy: function(req, res){
    var locationId = req.params.id
    db.user.remove({_id: locationId}, function(err, removedLocation){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedLocation: \n", removedLocation);
      res.status(200).json({"location": removedLocation});
    });
  }

};
