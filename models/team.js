const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamsSchema = new Schema({
    name:String,
    abbreviation:String,
    nameOfCoach:String,
    stadium:String,
    league:String,
    logo:String
}, {
    timestamps: true
});




module.exports = mongoose.model('Teams',teamsSchema );