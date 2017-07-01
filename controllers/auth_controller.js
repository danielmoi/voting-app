const { User } = require('../models');

// do passport.authenticate middleware here?
// no, probs in route
module.exports.create = async (req, res) => {
  console.log('we got here!!!!!!!!!');
  // console.log('req.body:', req.body);
  // const { username, email, password } = req.body;
  // const user = await User.find({
  //   where: {
  //     username,
  //   },
  // });
  res.json({ it: 'works' });
};
