const express = require("express");
const router = express.Router();
const { getClient, postClient } = require("../controllers/Client.controller");

router.get("/getclient", getClient);

router.post("/postclient", postClient);

module.exports = router;
