const Team = require('../models/team');

module.exports = {
    index,
    show
};


async function index(req, res) {
    const teams = await Team.find({});
    res.render('teams/index', { title: 'All Teams', teams });
}

async function show(req, res) {
    const teams = await Team.findById(req.params.id)
    .populate('players')
    res.render('teams/show', { title: `${teams.name} Team Details`, teams });
}