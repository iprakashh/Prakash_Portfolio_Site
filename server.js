const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

let visitors = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/visitor-count", (req, res) => {
visitors++;
res.json({ count: visitors });
});

app.post("/contact", async (req, res) => {

const { name, email, message } = req.body;

try {

const transporter = nodemailer.createTransport({

service: "gmail",

auth: {
user: "pikugee99@gmail.com",
pass: "kltv vqno vios arui"
}

});

await transporter.sendMail({

from: email,
to: "pikugee99@gmail.com",
subject: `Portfolio Message from ${name}`,

text:
`Name: ${name}
Email: ${email}

Message:
${message}`

});

res.send(`
<h2>Message sent successfully!</h2>
<a href="/">Go Back</a>
`);

} catch (error) {

console.log(error);

res.send(`
<h2>Error sending message.</h2>
<a href="/">Try Again</a>
`);

}

});

app.listen(PORT, () => {
console.log("Portfolio running on port " + PORT);
});