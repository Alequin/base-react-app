const commandLineArgs = require('./command-line-args')

const requestedEnvironment = commandLineArgs(0)

const options = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}

const currentEnvironment = options[requestedEnvironment.toUpperCase()]
process.env.NODE_ENV = currentEnvironment

module.exports = Object.freeze({
  current: currentEnvironment,
  isDevelopment: currentEnvironment === options.DEVELOPMENT,
  isProduction: currentEnvironment === options.PRODUCTION,
  options: {
    development: options.DEVELOPMENT,
    production: options.PRODUCTION
  }
})
