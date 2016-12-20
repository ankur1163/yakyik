var express = require("express");
var router = express.Router();
var ZoneController = require("../controllers/ZoneController");

//when you dont specify a file, index is the default file
var controllers = require("../controllers");
router.get("/:resource",function(req,res,next){

var resource = req.params.resource;
var controller  = controllers[resource]
controller.find(req.query,function(err,results){
   if(err){
     res.json({
       confirmation:"fail",
       message:err
     })
   }
   else{
     res.json({
       confirmation:"success",
       results:results
     })
   }


})

//delete below


});

router.get("/:resource/:id",function(req,res,next){
var resource = req.params.resource;
var id = req.params.id;
if(resource=="zone"){
  ZoneController.findById(id,function(err,result){
   if(err){
     res.json({
       confirmation:"fail",
       message:"not found"
     })
   }
   else{
     res.json({
       confirmation:"success",
       result:result
     })
   }


  });
}

});

router.post("/:resource",function(req,res,next){
 var resource = req.params.resource;
 if(resource==="zone"){
ZoneController.create(req.body,function(err,result){
if(err){
  res.json({
    confirmation:"fail",
    message:err
  })
}
else{
  res.json({
    confirmation:"success",
    result:result
  })
}

})

 }


})










module.exports = router;
