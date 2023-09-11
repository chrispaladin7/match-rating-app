const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamsSchema = new Schema({
    name:String,
    abbrivivation:String,
    nameOfCoach:String,
    Stadium:String,
    logo:String
});


module.exports = mongoose.model('Teams',teamsSchema );