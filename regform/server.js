import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
// import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, ()=>{
    console.log("listening to PORT: ", PORT);
});