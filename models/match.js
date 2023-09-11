const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    content: String,
    motm: String
}, {
    timestamps: true
});

const playerSchema = new Schema({
    playerName: String,
    playerNum: Number,
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Teams'
    },
    position: {
        type: String,
        enum: ['GK', 'DF', 'MF', 'FW']
    },
    isStarter: Boolean
});

const matchSchema = new Schema({
    // matchTitle is the concatenation of home team
    // and away team abbeviation
    matchTitle: {
        type: String,
        validate:/^[a-zA-Z]{3}v[a-zA-Z]{3}$/
    },
    homeTeam: {
        type: Schema.Types.ObjectId,
        ref: 'Teams'
    },
    awayTeam:{
        type: Schema.Types.ObjectId,
        ref: 'Teams'
    },
    homeScore: {
        type: Number,
        min: 0,
        max: 20
    },
    awayScore: {
        type: Number,
        min: 0,
        max: 20
    },
    date: Date,
    stadium: String,
    competition: {
        type: String,
        enum: ['La Liga', 'English Premier League']
    },
    comments: [commentsSchema],
    homeStarters:[playerSchema],
    homeSubs:[playerSchema],
    awayStarters:[playerSchema],
    awaySubs:[playerSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);