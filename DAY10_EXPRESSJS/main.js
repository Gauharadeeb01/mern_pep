const express=require("express");

const app=express();
// app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        status:"sucess",
        message:"server is running..."
    });
});

app.listen(1400);