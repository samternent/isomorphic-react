var Flux = require('tbg-flux-factory');


var App = Flux.createStore({
  name    : 'app',
  data    : {
              route : ''
            },
  actions: {
    view  : {
              setRoute: function (route) {
                // do some history stuff here
                history.pushState({ route: route }, null, route);
                App.setState({ route: route });
              }
            }
  }
});
