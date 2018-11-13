const path = require('path')

function sendFile (res, url) {
  const root = './..'
  const filePath = path.join(__dirname, `${root}${url}`)

  return new Promise((resolve, reject) => {
    res.sendFile(filePath, error => {
      !error ? resolve() : reject(error)
    })
  })
}

module.exports = sendFile
