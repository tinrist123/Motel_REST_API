const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import Routes
const utilitiesRoute = require("./src/routes/utilities");
const categoryRoute = require("./src/routes/motelCategory");
const roleUserRoute = require("./src/routes/roleUser");
const motelRoute = require("./src/routes/motel");
const userRoute = require("./src/routes/user");

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
//ROUTES
app.use("/utilities", utilitiesRoute);
app.use("/category", categoryRoute);
app.use("/roleUser", roleUserRoute);
app.use("/motel", motelRoute);
app.use("/user", userRoute);
//HOMEPAGE
app.get("/", (req, res) => {
  res.send("On homepage");
});

//connect to DB
mongoose.connect(
  "mongodb+srv://fastdelivery:dPSlkPnHQJHGVgLT@fastdeliverydb.cdg7y.mongodb.net/homestay",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => {
    console.log("connect to DB");
  }
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
