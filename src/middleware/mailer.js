const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const config = {
    secure:true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
}






const transporter = nodemailer.createTransport(config)


const sendMail = async(email)=>{
  
   try {
     const mailOptions = {
         from: process.env.EMAIL,
         to: email,
         subject: 'Test Email',
         text: 'Hello, this is a test email sent from a Node.js application!',
     };
    
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Email sent: ' + info.response);
     });
   } catch (error) {
    console.log(error);
   }
}


module.exports = sendMail