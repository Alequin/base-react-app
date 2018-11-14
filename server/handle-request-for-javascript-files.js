const environment = require('server-common/environment')
const sendFile = require('./send-file')

function handleRequestForJavascriptFiles ({ url }, res) {
  const shouldSendZippedFile =
    environment.isProduction && url.includes('bundle.js')

  if (shouldSendZippedFile) {
    res.set('Content-Encoding', 'gzip')
  }

  const filePostfix = shouldSendZippedFile ? '.gz' : ''
  sendFile(res, url + filePostfix).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = handleRequestForJavascriptFiles
