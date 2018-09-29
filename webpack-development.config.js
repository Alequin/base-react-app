const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const appEntry = './client/main.js'

const bundleName = 'bundle.js'
const bundleOutput = path.resolve(__dirname, './build')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', appEntry],
  output: {
    path: bundleOutput,
    filename: bundleName
  },
  devtool: 'eval-source-map',
  plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2']
        },
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  }
}
