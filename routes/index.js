var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/index.ejs', {
    title: 'Generador de Notas',
    institucion: process.env.INSTITUCION_NOMBRE || 'Instituto Austro'
  });
});

module.exports = router;
