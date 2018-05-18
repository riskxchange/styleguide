const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('[name].css')

const plugins = [extractCss]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

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
          { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
          'postcss-loader'
        ]
      })
    }, {
      test: /(.*).html$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'docs/index.html'
        }
      }]
    }]
  },
  plugins,
  devServer: {
    contentBase: [
      path.join(__dirname)
    ],
    proxy: {
      '/api': 'http://localhost:4000'
    },
    compress: true,
    port: 9876
  }
}
