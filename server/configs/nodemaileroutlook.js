const nodemailer=require("nodemailer");

require("dotenv").config()
const transporter=nodemailer.createTransport({
    service:"outlook",
    auth:{
        user:process.env.outlookuser,
        pass:process.env.outlookpass
    }
})

exports.sendMail=(reciever,content)=>{
    try{

        
        const mailOptions={
            from:"nikhil.khadka.925@outlook.com",
            to:reciever,
            subject:"test email 1234",
            text:content,
            html:"<p>hello this is verification email click on the link to verify your account</p><a href='http://localhost:2900/verify/token'>verify</a>"
        }



        //can use await and check the res then send response and use catch block to handle error
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }else{
                console.log(info);
                console.log("email succesfully sent")
            }


        })

    }catch(e){
        console.log(e)
    }
}