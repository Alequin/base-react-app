const {server: {authKey, authTitle}} = require("./../config.js")

const requestAuth = function (req, res, next) {
  const authKey = req.get(serverVariables.authTitle)
  if(authKey === serverVariables.authKey) {
    next()
  } else {
    res.status(401)
  }
}

export default requestAuth
