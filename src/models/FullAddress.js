const mongoose = require("mongoose");

const FullAddressSchema = mongoose.Schema({
  city: {
    code: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  district: {
    city_code: {
      type: Number,
    },
    code: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  ward: {
    code: {
      type: Number,
    },
    name: {
      type: String,
    },
    district_code: {
      type: Number,
    },
  },
  street_name: {
    type: String,
  },
  house_number: {
    type: String,
  },
});
module.exports = mongoose.model("full_address", FullAddressSchema);
