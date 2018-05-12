
const path = require('path');

const appEntry = "./client/main.js"

const bundleName = "bundle.js"
const bundleOutput = path.resolve(__dirname, "build")

module.exports = {
  mode: "development",
  entry: appEntry,
  output: {
    path: bundleOutput,
    filename: bundleName
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, './common'),
    },
		extensions: ['.js', '.jsx']
	},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
      }
    ]
  }
}
