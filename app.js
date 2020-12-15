const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const utilitiesRoute = require ('./src/routes/utilities');
const categoryRoute = require ('./src/routes/motelCategory');
const roleUserRoute = require ('./src/routes/roleUser');
const motelRoute = require ('./src/routes/motel');
const userRoute = require('./src/routes/user');
//ROUTES
app.use('/utilities', utilitiesRoute);
app.use('/category', categoryRoute);
app.use('/roleUser', roleUserRoute);
app.use('/motel', motelRoute);
app.use('/user', userRoute);
// app.use('/utilities', userRoute);
// app.use('/utilities', motelCategoryRoute);
// app.use('/utilities', fullAddressRoute);
// app.use('/utilities', locationRoute);
// app.use('/utilities', motelRoute);


//HOMEPAGE
app.get('/',(req,res) => { 
    res.send('On homepage');
});

//connect to DB
mongoose.connect( 
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
      useFindAndModify:false,
      useUnifiedTopology: true } , 
    () => {console.log('connect to DB')}
);

app.listen(3000);
