var path = require('path');

// looks for entry filenames - starting point
// scan the content for requires and (imports)
// bundles everything to a destination you specify
// that bundled file is what you add with a script tag

const config = {
  entry: {
    app: './app'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  devServer: {
    port: 4000
  }
}

module.exports = config;