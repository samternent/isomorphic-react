var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'bundle_js'   : './src/scripts/render_ui.coffee',
    'bundle_css'  : './src/styles/app.scss',
  },
  output: {
    filename: "./dist/client/[name].js",
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./dist/client/[name].css")
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee', '.scss']
  }
};
