import React,{Component} from "react";
import Zones from "../containers/Zones.js";
import Comments from "../containers/Comments.js";

class Home extends Component{
render(){
  return(
    <div className="container">
    <div className="row">
    <div className="col-md-4">
    <Zones />
        </div>
        <div className="col-md-8">
              <Comments />
        </div>
    </div>
    </div>
  )
}

}
export default Home
