const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');
const Client = require("../models/Client.model");



// get all contact
exports.getClient = async (req, res) => {
  try {
    const client = await Client.find();
    res.json(client);
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
};

// Post te client to mongodb
exports.postClient = async (req, res) => {
    const client = new Client({
      // créer des nouveaux clients
  
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ massage: error.message });
    }
  };

  
  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.gmail.com',
      auth: {
        type: 'custom',
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })
  );
  exports.replyContact = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    // console.log(message);
    try {
      const currentContact = await Client.findOne({ _id: id });
      if (currentContact) {
        const mailOptions = {
          from: process.env.EMAIL,
          to: currentContact.email,
          subject: 'Mail',
          text: message,
        };
        const envoiMail = await transporter.sendMail(mailOptions);
        if (envoiMail) return  res.status(200).json('Mail sent');
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };


  exports.singleContact = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const currentContact = await Client.findOne({ _id: id });
      if (currentContact) return res.status(200).json(currentContact);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

    

// module.exports = {
//     getClient,
//     postClient
// }