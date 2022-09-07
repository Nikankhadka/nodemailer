const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
    
    host:"smtp.zoho.com",
    secure:true,
    port:465,
    auth:{
        user:"nikhil.khadka.925@zohomail.com",
        pass:"Rudramum2@"
    }
})


exports.sendMail=(reciever,content)=>{
    try{
        const mailOptions={
            from:"nikhil.khadka.925@gmail.com",
            to:reciever,
            subject:"hello world",
            text:content
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }else{
                
                console.log("mail send succesfully ")
            }
        })

    }catch(e){
        console.log(e)
    }
}