var Comment = require("../models/Comment");

module.exports ={

find:function(params,callback){
Comment.find(params,function(err,comments){
  if(err){
        callback(err,null)
        return
        }
        else{
          callback(null,comments);
        }
})
},
findById:function(id,callback){
  Comment.findById(id,function(err,comment){
    if(err){
          callback(err,null)
          return
          }
          else{
            callback(null,comment);
          }

  })


},
update:function(id,params,callback){

  Comment.findByIdandUpdate(id,params,{new:true},function(err,comment){
   if(err){
callback(err,null)

   }
   else{
     callback(null,comment);
   }


  })


},

//create controller started
create:function(params,callback){
console.log(params);
  Comment.create(params,function(err,comment){
  if(err){
    callback(err,null)
  }
  else{
    callback(null,comment)
  }

  })


},
//delete controllers
delete:function(id,callback){
Comment.findByIdAndRemove(id,function(err){
if(err){
  callback(err,null)
}
else{
  callback(null,null)
}

})

}



}
