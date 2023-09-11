const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: String,
    motm: String
}, {
    timestamps: true
});

const staterSchema = new Schema({
    player1: String,
    player2: String,
    player3: String,
    player4: String,
    player5: String,
    player6: String,
    player7: String,
    player8: String,
    player9: String,
    player10: String,
    player11: String,
}, {
    timestamps: true
});

const subsSchema = new Schema({
    subPlayer1: String,
    subPlayer2: String,
    subPlayer3: String,
    subPlayer4: String,
    subPlayer5: String,
    subPlayer6: String,
    subPlayer7: String,
}, {
    timestamps: true
});



const matchSchema = new Schema({
    // matchTitle is the concatenation of home team
    // and away team abbeviation
    matchTitle: String,
    homeTeam: String,
    awayTeam: String,
    homeScore: Number,
    awayScore: Number,
    date: Date,
    time: String,
    stadium: String,
    competition: String,
    homeTeamStarters: [staterSchema],
    awayTeamStarters: [staterSchema],
    homeTeamSubs: [subsSchema],
    awayTeamSubs: [subsSchema],
    matchRating: [ratingsSchema],
    comments: [commentsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);