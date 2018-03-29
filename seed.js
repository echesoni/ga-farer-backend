//Queen Regent Stephanie
var db = require('./models');

var users_list = [
  {
    name: "Queen Regent, Stephanie",
    password: "123",
    user_post: "Off with their heads!"
  },
  {
    name: "Badass Bill",
    password: "456",
    post: "Whatever..."
  }
];

var posts_list = [
  {
    title: "first post",
    location: "San Francisco",
    post_description: "here we are at our first post"
  },
  {
    title: "second post",
    location: "Sydney",
    post_description: "second post"
  }
];

var locations_list = [
  {
    city: "San Francisco",
    image: "https://sf.curbed.com/2017/7/10/15949390/sf-least-affordable-rent-business",
    post: "seeded post about SF"
  },
  {
    city: "Sydney",
    image:"https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200",
    post: "seeded post about Sydney, Australia"
  }
];

// db.User.remove({}, function(err, users){
//   if(err) {
//     console.log('Error occured in remove', err);
//   } else {
//     console.log('removed all users');
//
//     // create new records based on seeded users array
//     db.User.create(users_list, function(err, users){
//       if (err) { return console.log('err', err); }
//       console.log("created", users.length, "users");
//       process.exit();
//     });
//   }
// });
//
// db.Post.remove({}, function(err, posts){
//   if(err) {
//     console.log('Error occured in remove', err);
//   } else {
//     console.log('removed all posts');
//
//     // create new records based on seeded users array
//     db.Post.create(posts_list, function(err, posts){
//       if (err) { return console.log('err', err); }
//       console.log("created", posts.length, "posts");
//       process.exit();
//     });
//   }
// });

db.Post.remove({}, function(err, questions){
  console.log("removed all posts");
  db.Post.create(posts_list, function(err, posts){
    if (err) {
      console.log(err);
      return;
    }
    console.log("recreated all posts");
    console.log("created", posts.length, "posts");

    db.User.remove({}, function(err, user){
      console.log("removed all users");
      users_list.forEach(function (userData){
        var user = new db.User({
          password: userData.password,
        });
        db.Post.find({ name: userData.name }, function(err, userPosts) {
          user.user_posts = userPosts;

          if (err) {
            console.log(err);
            return;
          }

          user.save(function(err, savedUser) {
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedUser.name + ' with posts ' + userPosts);
          });

        });
      });
    });
  });
});

db.Location.remove({}, function(err, locations){
  if(err) {
    console.log('Error occured in remove', err);
  } else {
    console.log('removed all locations');

    // create new records based on seeded users array
    db.Location.create(locations_list, function(err, locations){
      if (err) { return console.log('err', err); }
      console.log("created", locations.length, "locations");
      process.exit();
    });
  }
});
