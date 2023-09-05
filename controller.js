const express = require("express");
const tweetModel = require("./commentModel");
const getHomePage = (req, res) => {
  res.redirect("/tweet");
};

const sendTweet = (req, res) => {
  const tweet = new tweetModel(req.body);


  console.log(req.body.Name);
  console.log(req.body.Tweet);
  tweet
    .save()
    .then(() => {
      res.status(200).redirect("/tweet");
    })
    .catch((err1) => res.render("userComment", { err1: err1.errors }));
};

const getTweetPage = (req, res) => {
  tweetModel.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.render("Tweet", { tweet: data });
    })
    .catch(() => res.render(err));
};

const getFullTweet = (req, res) => {
  tweetModel.findById(req.params.id)
    .then((result) => {
      res.render("fullTweet", { tweet: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEditeditTweet = (req, res) => {
  tweetModel.findById(req.params.id)
    .then((result) => {
      res.render("editedTweet", { tweet: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  tweetModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/tweet"))
    .catch(() => res.redirect(err));
};

const updateTweet = (req, res) => {
  tweetModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.render("fullTweet", { tweet: result }))
    .catch((err1) => {
      res.render("wrongAddCommentPage", { err1: err1.errors });
    });
};

module.exports = {
  getHomePage,
  getTweetPage,
  sendTweet,
  getFullTweet,
  getEditeditTweet,
  deleteUser,
  updateTweet,
};
