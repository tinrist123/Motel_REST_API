const RoleUser = require("./RoleUser");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    id_role: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: RoleUser,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    img_url_avatar: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    identity_card: {
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

module.exports = mongoose.model("user", UserSchema);
