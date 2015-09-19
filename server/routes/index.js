require('coffee-script').register();


var React     = require('react/addons');

require('../../shared/flux');
var Flux = require('tbg-flux-factory');
var AppStore = Flux.getStore('app');


var ReactApp  = React.createFactory(require('../../shared/app.js'));


var myReactRoute = function (res, route) {
  AppStore.setState({ route: route });
  var reactApp = React.renderToString( ReactApp() );
  
  res.render('index.ejs', {
      ReactApp  : reactApp,
      Route     : route
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
  app.get('/account', function (req, res) {
    myReactRoute(res, 'account');
  });



  app.get('/script.js', function (req, res) {
    res.sendfile("./dist/script.js");
  });
};
