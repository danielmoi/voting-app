const express = require('express');
const multer = require('multer');
const usersController = require('../controllers/users_controller');
const authController = require('../controllers/auth_controller');

const upload = multer();

const router = express.Router();



module.exports = (passport) => {
  router.get('/health', (req, res) => {
    res.send('OK');
  });

  router.post('/users', usersController.create);

  router.get('/users', usersController.search);

  router.get('/login', authController.form);

  router.post('/login',
    passport.authenticate('local-signup', { failureRedirect: '/login' }),
    authController.login);

  return router;
};
