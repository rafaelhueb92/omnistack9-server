const User = require("../models/User");
module.exports = {
  index(req, res) {
    return res.json({});
  },
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!user) await User.create({ email });

    return res.json(user);
  }
};
