var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist/js/',
    publicPath: '/js/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot-loader/webpack!babel-loader',
        // options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    contentBase: './dist',
    port: 8080,
    // publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};