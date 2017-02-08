module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/invoicer.jsx",
  },

  output: {
    filename: "invoicer.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
};
