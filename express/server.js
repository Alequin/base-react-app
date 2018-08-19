const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')

const { graphqlExpress } = require('apollo-server-express')
const schema = require('./graphql/schema')

const environment = require('environment')

const environmentServer = environment.isDevelopment
  ? require('./development-server')
  : require('./production-server')

const serverConfig = require('server-config')

const GRAPHQL_ENDPOINT = '/graphql'
const PORT = serverConfig.port || 3000

const app = express()

app.use(express.static(__dirname + './../build'))

app.use(GRAPHQL_ENDPOINT, bodyParser.json(), graphqlExpress({ schema }))

app.use('/', environmentServer)
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${environment.current} mode`)
})
