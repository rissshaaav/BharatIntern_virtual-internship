import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
// import mongoose from "mongoose";

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
app.post("/", (req, res) => {
  const data = req.body;
  res.json(data);
});
app.listen(PORT, () => {
  console.log("listening to PORT: ", PORT);
});


