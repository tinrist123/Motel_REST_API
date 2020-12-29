const { Utilities } = require("../../models");

const getAllUtilities = async function (req, res) {
  try {
    console.log(123);
    await Utilities.find((err,utilities) => {
      if (err){
        return console.log(err);
      }
      else {
        res.set({
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST,   ",
          "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
          "Access-Control-Allow-Origin": "*",
        });
        res.render('utilities/utilities', {
          util :utilities
        })
      //res.status(200).json(utilities);
      }
    });
    //res.render('./views/utilities',);

  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllUtilities;
