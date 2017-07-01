module.exports.login = (req, res) => {
  res.json({
    you: 'ARE AUTHENTICATED!!!!!',
  });
};

module.exports.form = (req, res) => {
  res.render('login');
};
