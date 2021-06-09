const mongoose = require("mongoose");

const MatchPreferencesSchema = mongoose.Schema({
  distance: {
    type: Number,
    require: true,
  },
  age_range_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "age_range",
  },
});

module.exports = mongoose.model("match_preferences", MatchPreferencesSchema);
