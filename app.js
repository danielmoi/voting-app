const dotenv = require('dotenv');
const express = require('express');

// new instance from the express-session module, which will store our sessions.
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const { Strategy } = require('passport-local');
const bodyParser = require('body-parser'); // get data from forms
const { User } = require('./models');

dotenv.config({ path: '.env' });

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5001;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// implement req.body
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '5mb',
}));
app.use(bodyParser.json());

// configure assets
app.use(express.static(path.join(__dirname, 'public')));

// routes

// passport
passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  // session: false
}, (username, password, done) => {
  console.log('OH YEAHH!!!!!!!!!!!!');
}));

app.use('/', routes);


// error handler
app.use((err, req, res, next) => {
  console.log('⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔');
  console.log('err:', err);
  res.statusMessage = err.message; // eslint-disable-line
  res.json(err).status(400);
  next();
});

app.use(passport.initialize());

//  be sure to use express.session() before passport.session() to ensure that the login session is restored in the correct order.
app.use(passport.session());

// let's go!
app.listen(port, () => {
  console.log(`🌳  🌳  🌳  Now listening on ${port} 🌳  🌳  🌳`);
});
