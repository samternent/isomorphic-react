# React Globals
React         = require('react')
DOM           = require('tbg_react_dom')

Page          = React.createFactory(require('./pages/'))

# This file just serves as a wrapper
# ( I think anyways... until we look at data )
ReactApp =
  displayName   : 'ReactApp'
  render: ->
    DOM.div({ id : 'ReactApp', 'data-iso-set': @props.data.name },
      Page({ data: @props.data })
    )


module.exports = React.createClass(ReactApp)
