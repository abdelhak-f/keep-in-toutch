const Client = require("../models/Client.model");

const getClient = async (req, res) => {
  try {
    const client = await Client.find();
    res.json(client);
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
};

const postClient = async (req, res) => {
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


module.exports = {
    getClient,
    postClient
}