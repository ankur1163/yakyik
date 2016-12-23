import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../utils/AuthService'

//import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth = new AuthService("F4hEbL9ytVEJQQauTNSIau1nNlEhvP3b","app1163.auth0.com");

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Home} auth={auth}>
    
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes