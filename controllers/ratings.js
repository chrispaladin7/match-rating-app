const Rating = require('../models/team');

module.exports = {
    index
};


async function index(req, res) {
    res.render('ratings/index', { title : 'Player Rating' })
}