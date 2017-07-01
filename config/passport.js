const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

module.exports = (passport, user) => {

  passport.serializeUser((user, done) => {
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('INSIDE SERIALIZE USER!!!!!!!');
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    // query the current user from database
    console.log('🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩');
    console.log('id:', id);
    const user = await User.findOne({
      id,
    });
    if (!user) {
      console.log('INSIDE DESERIALIZE ERROR');
      return done(new Error(`User ${id} does not exist`));
    }
    return done(null, user);
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (username, password, done) => {
    console.log('username:', username);
    const user = await User.findOne({
      where: {
        email: username,
        password,
      },
    });

    if (!user) {
      console.log('🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭');
      console.log('🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭');
      console.log('🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭🌭');
      console.log('NO USER!!!!!!!!!!!');
      return done(null, false, {
        message: 'The user does not exist',
      });
    } else {
      return done(null, user);
    }
  }));
};
