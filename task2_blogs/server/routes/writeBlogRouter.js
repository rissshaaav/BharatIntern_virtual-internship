const express = require("express");
const BlogModel = require("../models/blogModel.js");
const writeBlogRouter = express.Router();

writeBlogRouter.post("/write", async (req, res) => {
  try {
    if (!req.body.blog) {
        console.log("detecting error");
        return res.status(400).send({ message: "empty blog found" });
      }
      const newBlog = {
        bannerURL: req.body.banner,
        content: req.body.blog,
        keywords: req.body.keywords,
      };
      console.log("newBlog data ", newBlog);
      const blog = await BlogModel.create(newBlog);
      return res.status(201).send(blog);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
module.exports = writeBlogRouter;