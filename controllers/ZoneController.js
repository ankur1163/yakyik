var Zone = require("../models/Zone");

module.exports ={

find:function(params,callback){
Zone.find(params,function(err,zones){
  if(err){
        callback(err,null)
        return
        }
        else{
          callback(null,zones);
        }
})
},
findById:function(id,callback){
  Zone.findById(id,function(err,zone){
    if(err){
          callback(err,null)
          return
          }
          else{
            callback(null,zone);
          }

  })


},
update:function(id,params,callback){

  Zone.findByIdandUpdate(id,params,{new:true},function(err,zone){
   if(err){
callback(err,null)

   }
   else{
     callback(null,zone);
   }


  })


},

//create controller started
create:function(params,callback){
console.log(params);
  var zips = params['zipCodes'];
  var zip = zips.split(",");
  var newZips =[];
  zip.forEach(function(zipcodes){
 newZips.push(zipcodes.trim());

  })
  params["zipCodes"]=newZips;
  Zone.create(params,function(err,zone){
  if(err){
    callback(err,null)
  }
  else{
    callback(null,zone)
  }

  })


},

delete:function(id,callback){
Zone.findByIdAndRemove(id,function(err){
if(err){
  callback(err,null)
}
else{
  callback(null,null)
}

})

}



}
