 const express=require("express");
 const app=express();
 function cal(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
 }
 app.get("/",function(req,res){
     const n=req.query.n;
     const sum=cal(n);
     res.send(sum);
 })
 app.listen(3000);