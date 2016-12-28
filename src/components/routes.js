import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth = new AuthService("jtoXlY3T0n9B3ttSasyN2NiY84NpXwsg","app1163.auth0.com");


// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  console.log("eh nextstate hai",nextState);
  
  
  if (!auth.loggedIn()) {
    console.log("it isnt logged in");
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
    
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
