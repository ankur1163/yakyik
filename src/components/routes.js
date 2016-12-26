import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth = new AuthService("jtoXlY3T0n9B3ttSasyN2NiY84NpXwsg","app1163.auth0.com");


// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  
  
  if (!auth.loggedIn()) {
    replace({ pathname: '/Login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
    
      <IndexRedirect to="/Home" />
      <Route path="Home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
