var express = require('express');
var router = express.Router();
var matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//GET /matches
router.get('/', matchesCtrl.index);

//GET /matches/;id
router.get('/:id', ensureLoggedIn, matchesCtrl.show);

module.exports = router;
