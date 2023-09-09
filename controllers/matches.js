const Match = require('../models/match');

module.exports = {
    index
};


async function index(req, res) {
    res.render('matches/index', { title : 'All Matches' })
}