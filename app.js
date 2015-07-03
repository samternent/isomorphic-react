var express   = require("express");
var app       = express();
var path      = require('path');

var React     = require('react/addons');
var ReactApp  = React.createFactory(require('./dist/scripts/app.js'));

// Set view path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var reactHtml = React.renderToString(ReactApp({}));
	res.render('index.ejs', { ReactApp: reactHtml });
});

app.get('/script.js', function(req, res) {
  res.sendfile("./dist/build_app.js");
});

app.get('/style.css', function(req, res) {
  res.sendfile("./dist/build_app.css");
});


app.listen(3000, function() {
  console.log("Working on port 3000");
});
