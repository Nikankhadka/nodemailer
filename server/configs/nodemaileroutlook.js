const nodemailer=require("nodemailer");


const transporter=nodemailer.createTransport({
    service:"outlook",
    auth:{
        user:"nikhil.khadka.925@outlook.com",
        pass:"Nikhildon1@"
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