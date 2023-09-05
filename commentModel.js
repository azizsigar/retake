const mongoose = require("mongoose");
mongoose.set("runValidators", true);

const tweet = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      maxlength: 15,
    },
    Message: {
      type: String,
      required: true,
      maxlength: 40,
    },
  },
  { timestamps: true }
);

const tweetModel = mongoose.model("tweet", tweet);

module.exports = tweetModel;
