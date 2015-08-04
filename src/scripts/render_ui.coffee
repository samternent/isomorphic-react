React = require('react')

Data        = require('./data')
ReactApp    = React.createFactory(require('./app'))

# Render React UI
#
# @mixin
#
# @author Sam
#
RenderUI = ->
  doc   = document
  react = doc.getElementById('ReactApp')
  app   = doc.getElementById('app')

  React.render(ReactApp({ data: Data[ react.dataset.isoSet ] }), app) if app

module.exports = new RenderUI()
