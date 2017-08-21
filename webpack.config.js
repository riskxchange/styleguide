const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('dist/main.css')
const uglifyJs = new webpack.optimize.UglifyJsPlugin({ minimize: true })

module.exports = {
  entry: {
    'dist/main.js': './src/index.js',
    'docs/react/bundle.js': './docs/react/index.js'
  },
  output: {
    filename: '[name]',
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /(.*).css$/,
      use: extractCss.extract({
        use: [
          { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
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
