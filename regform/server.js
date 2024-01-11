import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.static("src"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    if (
      !newUser.firstName &&
      !newUser.lastName &&
      !newUser.phoneNumber &&
      !newUser.email &&
      !newUser.password
    ) {
      return res.status(400).json({ message: "one or more fields missing!" });
    }
    const user = await User.create(newUser);
    res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening to PORT: ", PORT);
    });
    console.log("successfully connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to mongodb");
  });
