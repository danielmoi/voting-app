const dotenv = require('dotenv');
const express = require('express');

// new instance from the express-session module, which will store our sessions.
const session = require('express-session');
const path = require('path');
const passport = require('passport');


dotenv.config({ path: '.env' });
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5001;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

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

app.listen(port, () => {
  console.log(`🌳  🌳  🌳  Now listening on ${port} 🌳  🌳  🌳`);
});
