const { MotelCategory } = require("../../src/models/index");

function MigrateMotelCategory() {
  const data = require("../MotelCategory.json");
  dataCategory = data.category;
  dataCategory.map(async (cateMotel) => {
    const { name, room_type } = cateMotel;
    const cate = new MotelCategory({
      cate_name: name,
      room_type,
    });
    try {
      const saveCate = await cate.save();
      if (saveCate) console.log(saveCate);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

module.exports = MigrateMotelCategory;
