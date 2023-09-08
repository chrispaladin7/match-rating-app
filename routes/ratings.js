var express = require('express');
var router = express.Router();
var ratingsCtrl = require('../controllers/ratings');

//GET /ratings
router.get('/', ratingsCtrl.index);

module.exports = router;
