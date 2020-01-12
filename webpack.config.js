const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'git-ch',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "linkTag"
            }
          },
          {
            loader: "file-loader",
          }
        ]
      }
    ]
  }
}
