import React,{Component } from 'react';
import superagent from 'superagent';
import APIManager from "../../utils";

class CreateComment extends Component {
 constructor(){
super()
this.state ={
  comment:{
       body:"",
       username:""

  },
  list:[]




}

 }

 updateComment(event){
   console.log("update comment :" +event.target.id + "=="+event.target.value)
   let updatedComment = Object.assign({},this.state.comment)
   updatedComment[event.target.id] = event.target.value;
   this.setState({
     comment:updatedComment
   })

 }

 submitComment(){
   this.props.onCreate(this.state.comment)
 }


render(){

  return (

    <div>
    <h3> Create Comment </h3>

    <input  onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" placeholder="Username" /><br />
    <input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" placeholder="comment" /><br />

    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit comment </button>


    </div>
  )

}

}

export default CreateComment
