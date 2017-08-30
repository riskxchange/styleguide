const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('[name].css')
const IS_PROD = process.env.NODE_ENV === 'production'
const uglifyJs = new webpack.optimize.UglifyJsPlugin({ minimize: IS_PROD })

module.exports = {
  entry: {
    'docs/demo': './src/docs/index.js',
    'dist/main': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
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
          { loader: 'css-loader', options: { importLoaders: 1, minimize: IS_PROD } },
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
      path.join(__dirname)
    ],
    compress: true,
    port: 9876
  }
}
