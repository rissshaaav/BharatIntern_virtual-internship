const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const writeBlogRouter = require("./routes/writeBlogRouter")

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming Request Body:", req.body);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("home route hit");
});

app.use("/write", writeBlogRouter);

// app.post("/write", function (req, res) {
//   console.log(req.body);
//   res.status(201).send(req.body);
// });

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log("server running on port: ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to db");
  });
