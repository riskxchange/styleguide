module.exports = {
  plugins: {
    'postcss-mixins': {},
    'postcss-import': {},
    'postcss-inline-svg': {},
    'postcss-svgo': {},
    'postcss-cssnext': {
      browsers: ['last 4 versions', '> 1%']
    }
  }
}
