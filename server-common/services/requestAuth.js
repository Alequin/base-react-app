const serverConfig = require('server-config.js')

const requestAuth = function (req, res) {
  const authKey = req.get(serverConfig.authTitle)
  if (authKey === serverConfig.authKey) {
    req.next()
  } else {
    res.status(401).json({ wasAbleToAuthenticate: false })
  }
}

module.exports = requestAuth
