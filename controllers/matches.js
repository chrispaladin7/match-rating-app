const Match = require('../models/match');

module.exports = {
    index,
    show
};



async function index(req, res) {
    const matches = await Match.find({})
        .populate('homeTeam')
        .populate('awayTeam')
    res.render('matches/index', { title: 'All Matches', matches });
}

async function show(req, res) {
    const matches = await Match.findById(req.params.id)
    .populate('homeTeam')
    .populate('awayTeam')
    console.log(matches);
// res.render('matches/index', { title: 'All Matches', matches });
res.render('matches/show', { title: `${matches.matchTitle} Details`, matches });
}