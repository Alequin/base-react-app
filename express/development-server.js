const express = require('express')
const { graphiqlExpress } = require('apollo-server-express')

const app = express()
const GRAPHQL_ENDPOINT = '/graphql'

app.use('/graphiql', graphiqlExpress({ endpointURL: GRAPHQL_ENDPOINT }))

module.exports = app
