const path = require('path');

module.exports = {
  entry: "./client.js",
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: "./main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: true
}
