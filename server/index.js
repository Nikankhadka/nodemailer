const express=require("express");
const app=express();
const port=2900


//essential imports 
const cors=require("cors")



//setup a api route and send response of hello world








app.listen(port,()=>{
    console.log("server running on"+port)
})