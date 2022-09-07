const express=require("express");
const app=express();
const port=2900


//essential imports 
const cors=require("cors")
const cookieParser=require("cookie-parser")

//nodemailer moduel to send emails 

const mailsender=require("../server/configs/nodemailer")
const nodeoutlook=require("../server/configs/nodemaileroutlook")
const zoho=require("../server/configs/nodemailerzoho")

//middleware
app.use(cors({origin:true}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// we can pass property into the function for signinh cookies
app.use(cookieParser());





//routes
app.post("/",async(req,res)=>{
    // we just need to pass arguments into the funtion
   const  mail=await nodeoutlook.sendMail(req.body.reciever,req.body.content)
    res.send(mail);
})



//verification route


app.get("/verify/:token",(req,res,)=>{
    try{
        if(req.params.token=="token"){
            console.log("user has been verified");
            res.send("user has been verified")
        }else{
            res.send("user has not been verified")
        }

    }catch(e){
        console.log(e)
    }
})








//starting server on port 2900
app.listen(port,()=>{
    console.log("server running on"+port)
})