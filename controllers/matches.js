const Match = require('../models/match');

module.exports = {
    index
};



async function index(req, res) {
    const matches = await Match.find({})
        .populate('homeTeam')
        .populate('awayTeam')
    res.render('matches/index', { title : 'All Matches', matches});
}