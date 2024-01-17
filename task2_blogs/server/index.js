const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("home route hit");
});
app.post("/write", function (req, res) {
  console.log(req.body);
  res.status(201).send(req.body);
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
