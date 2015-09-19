import React from "react";
import Flux from 'tbg-flux-factory';
import {canUseDOM } from 'react/lib/ExecutionEnvironment';

if (canUseDOM) {
  // require('../../style/app.scss');
}

import Layouts from './layouts'


class Component extends React.Component {
  constructor() {
    super();
  }

  setStore(name) {
    this._store = Flux.getStore(name);
    this.state = this._store.getState();
    this._store.setState({ _sync : true });
  }

  componentDidMount() {
    let _this = this;
    _this._store.addChangeListener(()=>{
      _this.setState(_this._store.getState());
    });
  }

  componentWillUnmount() {
    this._store.removeChangeListener();
  }

}


// export default class App extends Component {
//   constructor() {
//     super();
//     this.setStore('test');
//   }
//
//
//   render() {
//     return (
//       <div >
//         app handler
//         { this.props.children }
//       </div>
//     );
//   }
// }
module.exports = React.createClass({
  render: function () {
    return React.DOM.div(null,
      React.DOM.h1(null, this.props.route)
    );
  }
});
