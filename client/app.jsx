import React from "react";
import ReactQueryParams from 'react-query-params';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import {hostname} from "common/config"

const client = new ApolloClient({
  uri: `${hostname.dev}/graphql`
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Hello} />
      </Router>
    </ApolloProvider>
  )
}

const Hello = () => {
  return <div>Hello</div>
}
