const Match = require('../models/match');

module.exports={
    create
}

async function create(req,res){
    const match = await Match.findById(req.params.id);
    match.reviews.push(req.body);
    try {
        await match.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/matches/${match._id}`);
}