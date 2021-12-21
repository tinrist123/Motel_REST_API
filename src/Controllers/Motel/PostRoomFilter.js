const { Motel } = require("../../models");

async function PostRoomFilter(req, res) {
  const {
    util_list,
    page_number,
    current_page,
    category_list,
    sex_allowed,
    place_detail,
  } = req.body;

  let listUtil_Id = [];
  let listCate_Id = [];

  if (category_list) {
    category_list.map((cate) => listCate_Id.push(cate.type));
  }
  if (util_list !== undefined) {
    util_list.map((util) => listUtil_Id.push(util.type));
  }

  let options = place_detail
    ? {
        motel_category:
          listCate_Id.length === 0
            ? {
                $nin: ["5fdacb520bf9b902c727ebbf"],
              }
            : {
                $in: [...listCate_Id],
              },
        util_list:
          listUtil_Id.length !== 0
            ? {
                $all: [...listUtil_Id],
              }
            : {
                $in: ["5fdacb520bf9b902c727ebc0"],
              },
        "full_address.district.code": parseInt(place_detail.district_code),
        sex_allowed: sex_allowed ? sex_allowed : "any",
      }
    : {
        motel_category:
          listCate_Id.length === 0
            ? {
                $nin: ["5fdacb520bf9b902c727ebbf"],
              }
            : {
                $in: [...listCate_Id],
              },
        util_list:
          listUtil_Id.length !== 0
            ? {
                $all: [...listUtil_Id],
              }
            : {
                $in: ["5fdacb520bf9b902c727ebc0"],
              },
        sex_allowed: sex_allowed ? sex_allowed : "any",
      };

  console.log(options);

  let result = await Motel.find()
    .skip(current_page * page_number)
    .limit(page_number)
    .populate("motel_category");

  res.send(result);
}

module.exports = PostRoomFilter;
