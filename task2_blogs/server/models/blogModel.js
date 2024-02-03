const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    bannerURL: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const BlogModel = mongoose.model('BlogModel', blogSchema);
module.exports = BlogModel;