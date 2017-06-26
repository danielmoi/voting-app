const express = require('express');
const multer = require('multer');
const usersController = require('../controllers/users_controller');

const upload = multer();

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});

router.post('/users', usersController.create);


module.exports = router;
