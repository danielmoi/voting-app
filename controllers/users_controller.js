const { User } = require('../models');

module.exports.create = async (req, res) => {
  console.log('we got here!!!!!!!!!');
  console.log('req.body:', req.body);
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  res.json(user);
};
