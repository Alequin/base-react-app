const doProcessArgsInclude = require('./do-process-args-include')

const DEVELOPMENT = 'dev'
const PRODUCTION = 'prod'

const currentEnvironment = doProcessArgsInclude(PRODUCTION)
  ? PRODUCTION
  : DEVELOPMENT

process.env.NODE_ENV = currentEnvironment

module.exports = Object.freeze({
  options: { DEVELOPMENT, PRODUCTION },
  current: currentEnvironment,
  isDevelopment: currentEnvironment === DEVELOPMENT,
  isProduction: currentEnvironment === PRODUCTION
})
