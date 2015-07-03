React = require('react')

Data        = require('./data/index.coffee')
ReactApp    = React.createFactory(require('./app.coffee'))

# Render React UI
#
# @mixin
#
# @author Sam
#
RenderUI = ->
  el = document.getElementById('ReactApp')
  React.render(ReactApp({}), el)

module.exports = new RenderUI()
