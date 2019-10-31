var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:firstName/:lastName', function(req, res, next) {
  res.render('index', {
  firstName: req.params.firstName,
  lastName: req.params.lastName
  });
  });

module.exports = router;
