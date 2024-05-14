const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors);
require("dotenv").config();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
