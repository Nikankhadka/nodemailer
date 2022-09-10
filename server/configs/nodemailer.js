const nodemailer=require("nodemailer")

//import the env files since it contains the credential for the account to send email 
require("dotenv").config()


//this will be the default setup for the transpoter since we are setting up project  else we could call this insid ea funtions
//and get email of both sender and receiver 
const transporter=nodemailer.createTransport({
    //firste we need to pass in the necessaru property
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:process.env.username,
        pass:process.env.password,
        clientId:process.env.client_id,
        clientSecret:process.env.secret,
        refreshToken:process.env.refresh_token
    }

});

//after passin the the credential into create transprt a tranppoter instacne or obj in is returned;


//now to atually send the mail we need to provide options so better to create a functions rather

exports.sendmail=(reciever,content)=>{
    try{
        //options for mail needs to be passed in
        const mailOptions={
            from:process.env.username,
            to:reciever,
            subject:"test email",
            text:content
        }

        //using sendmail function we send the email 
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }else{
                console.log("email sent")
            }
        })


    }catch(e){
        console.log(e)
    }
}


