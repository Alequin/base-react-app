const webpack = require('webpack')
const webpackBase = require('./webpack-base.config')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  ...webpackBase,
  mode: 'production',
  devtool: false,
  plugins: [...webpackBase.plugins, new CompressionPlugin()]
}
