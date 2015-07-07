require('coffee-script').register();


var React     = require('react/addons');
var ReactApp  = React.createFactory(require('../../src/scripts/app.coffee'));

var Data      = require('../../src/scripts/data/index.coffee');

var myReactRoute = function (res, data) {
  reactApp = React.renderToString( ReactApp({ data: Data[ data ] }) );

  res.render('index.ejs', {
      ReactApp: reactApp
    });
};

module.exports = function (app) {

  // Main app route

  app.get('/', function (req, res) {
    myReactRoute(res, 'home');
  });
  app.get('/home', function (req, res) {
    myReactRoute(res, 'home');
  });
  app.get('/work', function (req, res) {
    myReactRoute(res, 'work');
  });
  app.get('/about', function (req, res) {
    myReactRoute(res, 'about');
  });



  app.get('/script.js', function (req, res) {
    res.sendfile("./dist/client/bundle.js");
  });
  app.get('/style.css', function (req, res) {
    res.sendfile("./dist/client/bundle.css");
  });
};
