const express= require("express");
const app=express();

app.use(express.json());
app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer:a+b
    })
})


app.listen(3000);