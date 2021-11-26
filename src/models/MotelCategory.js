const mongoose = require("mongoose");

const MotelCategory = mongoose.Schema(
  {
    cate_name: {
      type: String,
      required: true,
    },
    room_type: {
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

module.exports = mongoose.model("motel_category", MotelCategory);
