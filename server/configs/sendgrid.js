const sgmail=require("@sendgrid/mail");


require("dotenv").config();
//setup the api key created in sendgrid
//only api key is nedded to setup the client verification then diretly use mail options to send mail even if u have setyup 2fa 
sgmail.setApiKey(process.env.api_key)


exports.sendMail=(reciever,content)=>{
    try{

       
        console.log(reciever,content)
        const mailOptions={
            from:"nikan.khadka.925@gmail.com",
            to:reciever,
            subject:"testing",
            text:content,
            html:"<p>hello</p>"
        }

        //since its an api functions call u can use await or .then 
        sgmail.send(mailOptions).then((res)=>{
            console.log(res[0].statusCode)
            console.log("email send succesfully")
        }).catch((err)=>{
            console.log(err.message)
        })

        //can use const res=await sgmail.send(mailOptions) get res and use try catch to handle response can also use callback 

        

    }catch(e){
        console.log(e)
    }
}