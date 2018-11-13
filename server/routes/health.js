const express = require('express')

const router = express.Router()

router.get('/_health', (req, res) => {
  res.json({ status: 'Online' })
})

module.exports = router
