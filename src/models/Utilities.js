const mongoose = require("mongoose");

const UtilitiesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_date",
      updatedAt: "updated_date",
    },
  }
);

module.exports = mongoose.model("utilities", UtilitiesSchema);
