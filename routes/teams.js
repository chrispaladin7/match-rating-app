var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

//GET /teams
router.get('/', teamsCtrl.index);

//GET /teams/:id
router.get('/:id', teamsCtrl.show);

module.exports = router;
