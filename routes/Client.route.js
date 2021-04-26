const express = require("express");
const router = express.Router();
const { getClient, postClient, replyContact, singleContact } = require("../controllers/Client.controller");

router.get("/getclient", getClient);

router.post("/postclient", postClient);

router.post('/reply/:id', replyContact);
router.post('/singlecontact/:id', singleContact);

module.exports = router;
