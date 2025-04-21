 const express=require("express");
 const app=express();
 app.get("/",function(req,res){
     res.send("hi there how ");
 })
 app.listen(3000);