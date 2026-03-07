const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

const app = express()

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended:true}))

app.post("/contact",(req,res)=>{

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:"pikugee99@gmail.com",
pass:"tgqo hhln civb qgon"
}
})

const mailOptions={
from:req.body.email,
to:"pikugee99@gmail.com",
subject:"Portfolio Contact",
text:`Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message}`
}

transporter.sendMail(mailOptions,function(error){
if(error){
res.send("Error sending message")
}else{
res.send("Message sent successfully")
}
})

})

app.listen(3000)