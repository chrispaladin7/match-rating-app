var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /teams
router.get('/', teamsCtrl.index);

//GET /teams/:id
router.get('/:id',ensureLoggedIn,teamsCtrl.show);

module.exports = router;
