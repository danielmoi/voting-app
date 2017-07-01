const { User } = require('../models');

module.exports.create = async (req, res) => {
  console.log('User:', User);
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  res.json(user);
};


module.exports.search = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
