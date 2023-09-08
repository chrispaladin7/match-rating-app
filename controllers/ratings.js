const Rating = require('../models/rating');

module.exports = {
    index
};


async function index(req, res) {
    res.render('ratings/index', { title : 'All Matches' })
}