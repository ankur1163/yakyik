import React,{Component} from "react";
import Zone from "../presentation/Zone";
import superagent from 'superagent';

class Zones extends Component{
  constructor(){
      super()
      this.state={
        zone:{
          name:"",
          zipCodes:""
          },
      list:[]
          }

  }
//ank
componentDidMount(){
superagent
.get("/api/zone")
.query(null)
.set("Accept","application/json")
.end((err,response)=>{
  if(err){
    alert("Eroor"+err)
    return
  }
  //console.log(JSON.stringify(response.body))
  let results = response.body.results;
  this.setState({
    list:results
  })
  //console.log("updated list ",this.state.list);
})
}
updateZone(event){
let updatedZone = Object.assign({},this.state.zone);
updatedZone[event.target.id]=event.target.value;
this.setState({
  zone:updatedZone
})

}

addZone(){
//  console.log("Add zone: "+JSON.stringify(this.state.zone))
  let updatedList = Object.assign([],this.state.list);
  updatedList.push(this.state.zone);
  this.setState({
    list:updatedList
  })
}
  render(){
    const listItems = this.state.list.map((zone,i)=>{
     return (
       <li key={i}>
         <Zone currentZone={zone}/>

       </li>
     )

   })
     return (
       <div>
       <ol>
           {listItems};
       </ol>
       <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
       <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /><br />
        <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add zone</button>


       </div>


     )


  }

}


export default Zones
