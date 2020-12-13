const express = require('express');
const util_router = express.Router();

const Util = require('../models/User');

util_router.get('/',(req, res) => {
    res.send('We are on User');
});

util_router.post('/', (req,res)=>{
    console.log(req.body);
});

module.exports = util_router;

