const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('main.css')
const uglifyJs = new webpack.optimize.UglifyJsPlugin({ minimize: true })

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }]
    }, {
      test: /(.*).css$/,
      use: extractCss.extract({
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    }]
  },
  plugins: [
    uglifyJs,
    extractCss
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'docs')
    ],
    compress: true,
    port: 9876
  }
}
