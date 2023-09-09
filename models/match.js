const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const matchSchema = new Schema({
    // matchTitle is the concatenation of home team
    // and away team abbeviation
   matchTitle:String,
   homeTeam:String,
   awayTeam:String,
   date:Date,
   time:Date,
   stadium:String,
   competition:String,
   homeTeamStarters:String,
   awayTeamStarters:String,
   homeTeamSubs:String,
   awayTeamSubs:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Match',matchSchema);