const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin('main.css')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /(.*).css$/,
      use: extractCss.extract({
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        { loader: 'file-loader',
          options: { name: '[name]-[hash].[ext]' } },
        { loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false,
              optimizationLevel: 7
            },
            optipng: {
              interlaced: false,
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            mozjpeg: {
              quality: 65
            }
          }
        }
      ]
    }]
  },
  plugins: [
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
