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
    preview: null

  getDefaultProps: ->



  _sign_request: (file, done) ->
    xhr = new XMLHttpRequest
    xhr.open 'GET', '/sign?file_name=' + file.name + '&file_type=' + file.type

    xhr.onreadystatechange = ->
      if xhr.readyState == 4 and xhr.status == 200
        response = JSON.parse(xhr.responseText)
        done response
      return

    xhr.send()
    return

  _upload: (file, signed_request, url, done) ->
    xhr = new XMLHttpRequest
    xhr.open 'PUT', signed_request
    xhr.setRequestHeader 'x-amz-acl', 'public-read'

    xhr.onload = ->
      if xhr.status == 200
        done()
      return

    xhr.send file
    return

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
  _handleChange: (e) ->
    file = React.findDOMNode(@refs.imageUpload).files[0]
    preview = React.findDOMNode(@refs.imagePreview)
    return if !file

    @_sign_request file, (response) =>
      @_upload file, response.signed_request, response.url, =>
        @setState preview : response.url
      return
  # --------------------------------------------
  # Render methods
  # --------------------------------------------

  _renderHeader: ->
    DOM.header({
      className: ''
      },
        DOM.h1(null, @props.data.title )
        DOM.div(null, @props.data.description )
      )

  render: ->
    console.log 'go'
    DOM.div(null,
      @_renderHeader()
      DOM.input({ ref: 'imageUpload', type: 'file', onChange: @_handleChange })
      DOM.div({ className: 'image-preview', style: { backgroundImage: "url(#{@state.preview})" }})
    )


module.exports = React.createClass(Component)
