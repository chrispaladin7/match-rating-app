const Match = require('../models/match');

module.exports = {
    create,
    delete: deleteReviews,
    update,
    // edit
}

async function create(req, res) {
    const match = await Match.findById(req.params.id);
    // Add the user-centric info to match reviews req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar
    // Pushes subdocs into Mongoose Match>review
    match.reviews.push(req.body);
    try {
        // Save any changes made to the movie doc
        await match.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/matches/${match._id}`);
}

async function deleteReviews(req, res) {
    const match = await Match.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user.id });
    // Guard for unauthorized Users
    if (!match) return res.redirect('/matches'); 
    // Remove the review using Id 
    match.reviews.remove(req.params.id);
    // Save the action to Match>reviews document
    await match.save();

    res.redirect(`/matches/${match._id}`)
}

async function update(req, res) {
    console.log(req.body)
    const match = await Match.findOne(
        { 'reviews._id': req.params.id});
    // Add the user-centric info to match reviews req.bodyß
    const reviewsSubdoc = match.reviews.id(req.params.id);
    if (!reviewsSubdoc.user.equals(req.user._id)) return res.redirect(`/matches/${match._id}`);
    // Update the text of the comment
    reviewsSubdoc.content = req.body.content;
    try {
        await match.save();
    } catch (e) {
        console.log(e.message);
    }
    // Redirect back to the book's show view
    res.redirect(`/matches/${match._id}`);
}