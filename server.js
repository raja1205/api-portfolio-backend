const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

//CORS Config
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));
//CORS Config


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
