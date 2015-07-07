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
  el    = doc.getElementById('ReactApp')
  React.render(ReactApp({ data: Data[ el.dataset.isoSet ] }), el) if el

module.exports = new RenderUI()
