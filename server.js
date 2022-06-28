const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());

//import routes
const dataRoute = require("./routes/dataRoute");

app.use("/api/v1", dataRoute);

app.get("/", (req, res) => {
  res.send("Node Server is Running...");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Node Server is listening at 5000`);
});

module.exports = app;
