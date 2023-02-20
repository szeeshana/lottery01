var express = require('express');
var router = express.Router();
var types = require('../public/json/lotto-types.json')
var userByTypes = require('../public/json/lotto-user.json');

/* GET home page. */
router.get('/lottery', function(req, res, next) {
  // query
console.log(types);
  res.render('lottery', { types,userByTypes });
});

router.get('/', function(req, res, next) {
    res.render('main');
});

module.exports = router;
