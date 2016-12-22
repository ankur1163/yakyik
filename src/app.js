import React,{Component,PropTypes as T } from 'react';
import ReactDOM from "react-dom";
import Ankur from "./components/containers/ankur"
import Home from "./components/layout/Home";
import {Router,Route,IndexRoute,browserHistory,hashHistory,Link } from 'react-router';
//import AuthService from './utils/AuthService';


//auth service code starts

import Auth0Lock from 'auth0-lock'


class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/',
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
    // navigate to the home route
    hashHistory.replace('/Ankur')
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}





//auth service code ends

const auth = new AuthService('F4hEbL9ytVEJQQauTNSIau1nNlEhvP3b', 'app1163.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/' })
  }
}


class App extends Component{
 static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render(){
    const { auth } = this.props;
    console.log(auth)
              return(

                    <div>
                  <Home />
                  <Link to="/ankur">Go to Ankur</Link>
                  <button><a href="/ankur">Ankur</a></button>
                  <button onClick={auth.login.bind(this)}>Login</button>

                  </div>
                    )

              }
}

const router = (
 <Router history={hashHistory}>
  <Route path="/"  component={App}></Route>
  //<Route path="/ankur" auth={auth} onEnter={requireAuth} component={Ankur}></Route>
  </Router>
)

ReactDOM.render(router,document.getElementById("root"))
