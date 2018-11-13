const express = require('express')
const health = require('./health')

const router = express()

router.use('/', health)

module.exports = router
