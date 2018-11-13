const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const webpackBase = require('./webpack-base.config')

module.exports = {
  ...webpackBase,
  mode: 'development',
  plugins: [...webpackBase.plugins]
}
