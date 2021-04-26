require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const clientRouter = require("./routes/Client.route");
app.use(cors());
// connecter a la base de donnée
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);

  });

app.use(express.json());

app.use("/", clientRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app listen in port ${PORT}`);
});


// Send mail

// let nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// let mailOptions = {
//   from: 'abdo.taha.21.ts@gmail.com',
//   to: 'kaoutar1dev@gmail.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1 >Welcome</h1><p>That was easy to send mail!</p>'
  
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
