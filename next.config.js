const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack: (config, { buildId, dev }) => {
    // Perform customizations to webpack config
    config.plugins.push(new UglifyJSPlugin({
       compress: {
        warnings: false,
        drop_console: true
      }
    }))
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}