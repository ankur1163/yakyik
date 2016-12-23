import React,{Component,PropTypes as T } from 'react';
import ReactDOM from "react-dom";
import Ankur from "./components/containers/ankur"
import Home from "./components/layout/Home";
import {Router,Route,IndexRoute,browserHistory,hashHistory,Link } from 'react-router';



class App extends Component{
  
  

  render(){
    
   
              return(

                    <div>
                  <Home />
                  <Link to="/ankur">Go to Ankur</Link>
                  
                  
                  

                  </div>
                    )

              }
}

const router = (
 <Router history={hashHistory}>
  <Route path="/"  component={App}></Route>
  <Route path="/ankur" component={Ankur}></Route>
  </Router>
)

ReactDOM.render(router,document.getElementById("root"))
