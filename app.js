const dotenv = require('dotenv');
const express = require('express');

// new instance from the express-session module, which will store our sessions.
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser'); // get data from forms

const passportConfig = require('./config/passport');
const models = require('./models');

dotenv.config({ path: '.env' });


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



app.use(passport.initialize());

//  be sure to use express.session() before passport.session() to ensure that the login session is restored in the correct order.
app.use(passport.session());

passportConfig(passport);


// routes
const routes = require('./routes')(passport);
app.use('/', routes);





// error handler
app.use((err, req, res, next) => {
  console.log('⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔');
  console.log('err:', err);
  res.statusMessage = err.message; // eslint-disable-line
  res.json(err).status(400);
  next();
});



models.sequelize.sync().then(() => {
  // let's go!
  app.listen(port, () => {
    console.log(`🌳  🌳  🌳  Now listening on ${port} 🌳  🌳  🌳`);
  });
})

