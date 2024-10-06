const express = require("express");
const app = express();
const senderMailRoute = require("./routes/sendEmail.routes.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;


app.use('/api/v1/',senderMailRoute);

app.listen(port, ()=>{
   console.log(`App is listening at port no.: ${port}`);
})