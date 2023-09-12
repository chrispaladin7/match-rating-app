const express = require('express');
const router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

//POST /matches/:id/reviews
router.post('/matches/:id/reviews', reviewsCtrl.create)




module.exports = router;