const { Utility } = require("../../src/models/index");

function MigrateUtils() {
  const { Utilities } = require("../Utilities.json");

  Utilities.map(async (util) => {
    const { name, iconUrl, type } = util;
    const utility = new Utility({
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
