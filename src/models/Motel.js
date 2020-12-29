const mongoose = require("mongoose");
const MotelCategory = require("./MotelCategory.js");

const FullAddress = require("./FullAddress");
const Utils = require("./Utilities");
const User = require("./User");
const { Blob } = require("node-fetch");

const MotelSchema = mongoose.Schema(
  {
    motel_category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: MotelCategory,
    },
    id_motel_host: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: User,
    },
    name_motel: {
      type: String,
      required: true,
    },
    room_price: {
      type: Number,
      required: true,
    },
    electric_price: {
      type: Number,
    },
    water_price: {
      type: Number,
    },
    wifi_cost: {
      type: Number,
    },
    parking_fee: {
      type: Number,
    },
    isConfirmed: {
      type: Boolean,
      required: true,
    },
    square: {
      type: Number,
      required: true,
    },
    deposit: {
      type: Number,
      require: true,
    },
    number_vacancies_available_in_room: {
      type: String,
      required: true,
    },
    exact_room_address: {
      type: String,
      required: true,
    },
    full_address: {
      type: Object,
    },
    util_list: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Utils,
      },
    ],
    sex_allowed: {
      // female / male <-- any (both of them)
      type: String,
      required: true,
    },
    total_view: {
      type: Number,
    },
    prominent: {
      type: Boolean,
    },
    more_description: {
      type: String,
      required: true,
    },
    imgUrl_list: [
      {
        type: String,
        required: true,
      },
    ],
    room_is_shared: {
      type: Boolean,
      required: true,
    },
    isPending: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: {
      createdAt: "created_date",
      updatedAt: "updated_date",
    },
  }
);

module.exports = mongoose.model("motel", MotelSchema);
