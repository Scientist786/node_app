var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// In-memory storage for selected color
var selectedColor = '#ffffff';

// Configuration
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/playground', function(req, res) {
  res.render('playground', { color: selectedColor });
});

app.post('/playground', function(req, res) {
  selectedColor = req.body.color || '#ffffff';
  res.redirect('/playground');
});

app.get('/about', function(req, res) {
  res.render('about', {
    nodeVersion: process.version,
    expressVersion: require('express/package.json').version
  });
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
