const express = require("express");
const { sendingMessages } = require("../controllers/sendEmail.controllers.js");


const senderMailRoute = express();


senderMailRoute.route("/sendEmail").post(sendingMessages);


module.exports = senderMailRoute;