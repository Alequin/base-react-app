const { isProduction } = require('server-common/environment')

function handleRequestForJavascriptFiles (_req, res) {
  const shouldSendZippedFile = isProduction && url.includes('bundle.js')

  if (shouldSendZippedFile) {
    res.set('Content-Encoding', 'gzip')
  }
  const filePostfix = shouldSendZippedFile ? '.gz' : ''

  sendFile(res, url + filePostfix).catch(err => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
}

module.exports = handleRequestForJavascriptFiles
