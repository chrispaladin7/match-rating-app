const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const teamsSchema = new Schema({
    name: String,
    abbreviation: String,
    nameOfCoach: String,
    stadium: String,
    league: String,
    logo: String,
    players:[playerSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Teams', teamsSchema);