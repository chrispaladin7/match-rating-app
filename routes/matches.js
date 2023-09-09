var express = require('express');
var router = express.Router();
var matchesCtrl = require('../controllers/matches');

//GET /ratings
router.get('/', matchesCtrl.index);

module.exports = router;
