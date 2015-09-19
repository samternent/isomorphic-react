var React = require('react');
var Layouts = require('./layouts');

var Flux = require('tbg-flux-factory');
var AppStore = Flux.getStore('app');


var LocalLink = React.createFactory(require('./components/local_link'));

module.exports = React.createClass({
  displayName: 'app',

  getInitialState: function () {
    return AppStore.getState();
  },

  componentDidMount: function () {
    var that = this;
    AppStore.addChangeListener(function () {
      that.setState(AppStore.getState());
    });
  },

  render: function () {
    return React.DOM.div(null,
      LocalLink({ route: 'home' }, 'home'),
      LocalLink({ route: 'account' }, 'account'),
      React.DOM.h1(null, this.props.route),
      React.createFactory(Layouts[ this.state.route ])(),
      React.DOM.h2(null, 'footer')
    );
  }
});
