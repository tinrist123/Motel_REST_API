const { User } = require("../../models");

const postUser = async (req, res) => {
  const user = new User({
    id_role: req.body.id_role,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    date_of_birth: req.body.date_of_birth,
    img_url_avatar: req.body.img_url_avatar,
    phone_number: req.body.phone_number,
    address: req.body.address,
    identity_card: req.body.identity_card,
  });
  try {
    const result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = postUser;
