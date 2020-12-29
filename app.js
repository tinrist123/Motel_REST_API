const express = require("express");
const expressEjsLayouts = require('express-ejs-layouts');
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
var session = require("express-session");
var flash = require("connect-flash")
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000},
  resave:false,
  saveUninitialized:false
}));


app.use(flash());
// EJS
//app.use(expressEjsLayouts);

// var path = require('path');
// var viewPath = path.join(__dirname, 'src/views');s
// app.set("views", "./src/views");

const path = require('path')
app.set('views', path.join(__dirname, '/src/views'))
app.set("view engine","ejs");

app.set("layout","./src/views/layouts/layout");




// //Import Routes
const utilitiesRoute = require("./src/routes/utilities");
const categoryRoute = require("./src/routes/motelCategory");
const roleUserRoute = require("./src/routes/roleUser");
const motelRoute = require("./src/routes/motel");
const userRoute = require("./src/routes/user");

// //ROUTES
//app.use("/utilities", utilitiesRoute);
app.use("/categories", categoryRoute);
app.use("/roleUser", roleUserRoute);
app.use("/motels", motelRoute);
app.use("/user", userRoute);
app.use('/utilities', utilitiesRoute);


// app.use('/utilities', motelCategoryRoute);
// app.use('/utilities', fullAddressRoute);
// app.use('/utilities', locationRoute);


//HOMEPAGE
// app.get("/utilities", (req, res) => {
// //   //res.send("On homepage");
//   res.render('utilities', {title: "Utilities List"});
// });

// app.get("/",(req, res) => {
//   //res.send("On homepage");
//   res.render('motel', {title: "Utilities List"});
// })

// app.get("/motelcategory",(req, res) => {
//   //res.send("On homepage");
//   res.render('motelCategory', {title: "Utilities List"});
// });






//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => {
    console.log("connect to DB");
  }
);

app.listen(3333);
