const express = require('express');
const multer = require('multer');

const upload = multer();

const router = express.Router();

router.get('/health', (req, res) => {
  res.send('OK');
});

router.post('/upload', upload.single('magic'), (req, res) => {
  const { originalname, mimetype, size } = req.file;

  res.json({
    originalname,
    mimetype,
    size,
  });
});

router.get('/*', (req, res) => {
  res.render('upload', {
    title: 'Upload',
  });
});

module.exports = router;
