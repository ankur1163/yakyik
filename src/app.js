import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/containers/App.js'


import {browserHistory} from 'react-router'
import makeRoutes from './components/routes'

const routes = makeRoutes()

const mountNode = document.getElementById('root');
ReactDOM.render(
  <App history={browserHistory}
        routes={routes} />,
mountNode);
