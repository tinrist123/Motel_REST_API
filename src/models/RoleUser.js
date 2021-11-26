const mongoose = require("mongoose");

const RoleUserSchema = mongoose.Schema(
  {
    name_role: {
      type: String,
      required: true,
    },
    note: {
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

module.exports = mongoose.model("role_user", RoleUserSchema);
