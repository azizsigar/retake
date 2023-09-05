const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getTweetPage,
  sendTweet,
  getFullTweet,
  deleteUser,
  getEditeditTweet,
  updateTweet,
} = require("./controller.js");

router.get("/", getHomePage);

router.get("/tweet", getTweetPage);

router.post("/sendTweet", sendTweet);

router.get("/fullTweet/:id", getFullTweet);

router.get("/editTweet/:id", getEditeditTweet);

router.post("/deleteUser/:id", deleteUser);

router.post("/updateTweet/:id", updateTweet);

module.exports = router;
