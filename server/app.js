const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const routes = require('./routes')
const path = require('path')

const { ApolloServer } = require('apollo-server-express')
const schema = require('./graphql/schema')

const serverConfig = require('server-common/server-config')
const environment = require('server-common/environment')

const environmentServer = environment.isDevelopment
  ? require('./development-server')
  : require('./production-server')

const app = express()

app.use(cookieParser())
app.use(
  expressSession({
    secret: 'a',
    resave: false,
    saveUninitialized: true,
    cookie: { test: true }
  })
)

const GRAPHQL_PLAYGROUND_CONGIF = {}

const server = new ApolloServer({
  schema,
  playground: environment.isDevelopment ? GRAPHQL_PLAYGROUND_CONGIF : false,
  context: ({ req, res }) => {
    return {
      req: req,
      res: res
    }
  }
})

const GRAPHQL_ENDPOINT = '/graphql'
server.applyMiddleware({
  app,
  path: GRAPHQL_ENDPOINT
})

app.use(bodyParser.json())
app.use(express.static(__dirname + './../dist'))

app.use('/', environmentServer)
app.use('/api', routes)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './../dist/index.html'), function (err) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
})

const PORT = serverConfig.port || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
})
