import React,{Component } from 'react';
import {CreateComment,Comment} from "../presentation";
import styles from "./styles";
import superagent from "superagent";
import  {APIManager} from "../../utils";

class Comments extends Component {
  constructor(){
   super()
       this.state = {

         list:[]

       }
  }
  submitComment (comment){

    console.log("function worked from view",comment)

  let updatedComment = Object.assign({},comment)
APIManager.post("/api/comment",comment,(err,response)=>{
  if(err){
    alert("ERROR "+err.message)
    return
  }
  else{
    console.log("comment CREATED "+JSON.stringify(response.result));
let updatedList = Object.assign([],this.state.list)
updatedList.push(response.result)
    this.setState({
      list:updatedList
    })
    console.log("updated result ",this.state.list)



  }

})

  }


  
  componentDidMount(){
  APIManager.get("/api/comment",null,(err,response)=>{
  if(err){
    alert("ERROR ",err.message)
    return
  }
  else{
    this.setState({
      list:response.results
    })
  }

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


<CreateComment onCreate={this.submitComment.bind(this)}/>
       </div>
  </div>

)



}

}

export default Comments
