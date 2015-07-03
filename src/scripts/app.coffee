# React Globals
React         = require('react')
DOM           = require('tbg_react_dom')

# This file just serves as a wrapper
# ( I think anyways... until we look at data )
ReactApp =
  displayName   : 'ReactApp'
  render: ->
    DOM.div({ id : 'ReactApp' },
      'put the content here'
    )


module.exports = React.createClass(ReactApp)
