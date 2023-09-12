var express = require('express');
var router = express.Router();
var matchesCtrl = require('../controllers/matches');

//GET /matches
router.get('/', matchesCtrl.index);

//GET /matches/;id
router.get('/:id', matchesCtrl.show);

module.exports = router;
