const express = require('express');
const router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /matches/:id/reviews
router.post('/matches/:id/reviews',ensureLoggedIn,reviewsCtrl.create);

//PUT /reviews/:id
router.put('/reviews/:id',ensureLoggedIn,reviewsCtrl.update);

//DELETE /reviews
router.delete('/reviews/:id',ensureLoggedIn,reviewsCtrl.delete);

module.exports = router;