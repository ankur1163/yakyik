import React,{Component } from 'react';
import Comment from "../presentation/Comment";
import styles from "./styles";
import superagent from "superagent";

class Comments extends Component {
  constructor(){
   super()
       this.state = {
         comment:{
           username:"",
           body:"",
           timestamp:""

         },
         list:[]

       }
  }
  submitComment (){
    console.log("submit comment"+JSON.stringify(this.state.comment))
    let updatedList=Object.assign([],this.state.list);
    updatedList.push(this.state.comment)
    this.setState({
      list:updatedList
    })
  }
  updateTimestamp(event){
    let updatedComment = Object.assign({},this.state.comment)
    updatedComment["timestamp"]=event.target.value;
    this.setState({
      comment:updatedComment
    })

  }
  updateUsername(event){
  //console.log("ankur",event.target.value);

  let updatedComment = Object.assign({},this.state.comment);
  updatedComment["username"] = event.target.value;
  this.setState({
    comment:updatedComment
  })

  }
  updateComment(event){
    let updatedComment = Object.assign({},this.state.comment)
    updatedComment["body"] = event.target.value
    this.setState({
      comment:updatedComment
    })
  //  console.log("update comment "+event.target.value)
  }
  componentDidMount(){
  superagent
  .get("/api/comment")
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
  //  console.log("updated list ",this.state.list);
  })
  }

render(){
  const commentList = this.state.list.map((comment,i)=>{
    return(

      <li key={i}><Comment currentComment = {comment} /></li>
    )
  })
  //console.log(commentList);

return(

  <div>
      <h2>comments:Zone 1 </h2>
      <div style={styles.comment.CommentsBox}>
       <ul style={styles.comment.commentList}>
        {commentList}
</ul>
<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
<input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="comment" /><br />
<input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="date"/><br />
<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit comment </button>

       </div>
  </div>

)



}

}

export default Comments
