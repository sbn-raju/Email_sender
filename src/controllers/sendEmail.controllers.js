const sendMail = require("../middleware/mailer.js");


//This API Will send the mail to the reciever from the sender/Company
const sendingMessages = async(req,res)=>{
    

    //Getting the email from the request
    const { email } = req.body;

    //Consoling the email 
    console.log(email);

    //Sending the email to the reciever
    try {
        const response = await sendMail(email);
        return res.status(200).json({
            success:true,
            message:"The Mail sent Successfully",
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success:true,
            message:`The Mail not sent due to ${error}`,
        })
    } 
}

module.exports = {
    sendingMessages
}