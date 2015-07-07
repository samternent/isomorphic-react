# React Globals
React         = require('react')
DOM           = require('tbg_react_dom')

# Helpers

# Mixins

# Components

# Flux
Data         = require('../data/')
NavData      = Data.nav


# Component
#
# @mixin
#
# @author Sam
#
Component =

  # --------------------------------------------
  # Defaults
  # --------------------------------------------

  displayName   : 'Component'
  propTypes     : {

                  }
  mixins        : []


  # --------------------------------------------
  # Getters & Checkers - get/has/can/is
  # --------------------------------------------

  getInitialState: ->
    null

  getDefaultProps: ->



  # --------------------------------------------
  # Lifecycle Methods
  # --------------------------------------------

  componentWillMount: ->          # add event listeners (Flux Store, WebSocket, document)
  componentWillReceiveProps: ->   # change state based on props change
  componentDidMount: ->           # data request (XHR)
  componentWillUnmount: ->        # remove event listeners


  # --------------------------------------------
  # Event handlers
  # --------------------------------------------
  _handleClick: (e) ->
    e.preventDefault()

  # --------------------------------------------
  # Render methods
  # --------------------------------------------
  _renderList: (obj, className) ->
    list = obj.map( (item, i) =>
      DOM.li({
        key       : "item_#{i}"
        className : 'nav-list__item'
        },
        DOM.a({
          href    : item.path
          onClick : @handleClick
          }, item.title)
        )
      )

    return DOM.ul({ className: 'nav-list' }, list)

  _renderHeader: ->
    DOM.header({
      className: ''
      },
        DOM.h1(null, @props.data.title )
        DOM.div(null, @props.data.description )
        DOM.nav({
          className: 'page-nav'
          }, @_renderList(NavData))
      )

  render: ->
    DOM.div(null,
      @_renderHeader()
    )


module.exports = React.createClass(Component)
