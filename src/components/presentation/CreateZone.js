import React,{Component} from 'react';

class CreateZone extends Component {

  constructor(){
    super()
    this.state={
      zone:{
        name:"",
        zipCode:""

      }
    }
  }
  submitZone(event){
    console.log("xone ",JSON.stringify(this.state.zone));
    this.props.onCreate(this.state.zone);

  }

updateZone(event){
  let updated = Object.assign({},this.state.zone);
  updated[event.target.id]=event.target.value;
  this.setState({
    zone:updated
  })
}
render(){
return(
<div>
<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="name" />
<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZIPCODE" />
<button onClick={this.submitZone.bind(this)} className="btn btn-default">Add zone </button>
</div>

)

}

}

export default CreateZone
