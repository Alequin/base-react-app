const args = process.argv

const argsMap = args.reduce((map, arg) => {
  return { ...map, [arg]: true }
}, {})

const doProcessArgsInclude = (...args) => {
  return args.some(arg => argsMap[arg])
}

module.exports = doProcessArgsInclude
