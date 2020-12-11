const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  districts: [
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      wards: [
        {
          id: {
            type: Number,
          },
          name: {
            type: String,
          },
          prefix: {
            type: String,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("location", AddressSchema);
