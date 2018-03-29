var express = require('express'),
  app = express(),
  controller = require('./controllers'),
  bodyParser = require('body-parser');

  // Configure app
  app.use(express.static('public'));          // Static directory
  app.use(bodyParser.urlencoded({ extended: true })); // req.body

// ROUTES
// json endpoints
app.get('/api/user', controller.users.index);

app.get('/api/post', controller.posts.index);

app.get('/api/location', controller.locations.index);

//listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on http://localhost:3000');
});
