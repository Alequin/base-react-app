import React from 'react'
import ReactDOM from 'react-dom'

import { injectGlobal } from 'styled-components';

import App from "./app.jsx"

injectGlobal`
  html{
    height: 100%;
  }
  body {
    margin: 0;
    height: inherit;
  }
`

ReactDOM.render(<App/>, document.getElementById('app'))
