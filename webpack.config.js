module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/invoicer.jsx",
    html: "./invoicer.html",
  },

  output: {
    filename: "invoicer.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },

  module: {
    preLoaders: [
      // Javascript
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: false
  },
};
