const developmentConfig = require('./webpack-development.config')

const webpack = require('webpack')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = Object.assign(developmentConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new uglifyjsWebpackPlugin()
  ]
})
