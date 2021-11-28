const { Utilities } = require("../../src/models/index");

function MigrateUtils() {
  const data = require("../Utilities.json");
  data.data.map(async (util) => {
    const { name, iconUrl, type } = util;
    const utility = new Utilities({
      iconUrl,
      name,
      type,
    });
    try {
      const saveUtility = await utility.save();
      if (saveUtility) console.log(saveUtility);
    } catch (err) {
      console.log(err);
    }
  });
}

module.exports = MigrateUtils;
