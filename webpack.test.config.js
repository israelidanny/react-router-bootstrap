var path = require('path');

module.exports = {
  entry: undefined,

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, "tests-served/"),
    publicPath: "/public/",
    filename: "[name].js"
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loader: "jsx?harmony"},
    ]
  },
}