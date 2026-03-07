const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Contact form
app.post("/contact", async (req, res) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pikugee99@gmail.com",
      pass: "tgqo hhln civb qgon"
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: "pikugee99@gmail.com",
    subject: "Portfolio Contact Message",
    text: `
Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message}
`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Message Sent Successfully");
  } catch (error) {
    res.send("Error sending message");
  }

});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});