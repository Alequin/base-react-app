import React from 'react'
import gql from 'graphql-tag'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { Query, ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: `/graphql`
})

export default () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={Hello} />
      </Router>
    </ApolloProvider>
  )
}

const QUERY = gql`
  {
    search{
      id
    }
  }
`

const Hello = () => {
  return <Query query={QUERY}>
    {({error, loading, data}) => {
      if(data.search) return <div>{data.search.id}</div>
      return <div>Loading</div>
    }}
  </Query>
}
