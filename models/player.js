const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: String,
    playerNum: Number, 
    teamName: String, 
    position:   {
        type:String,
        enum:['GK','DF','MF','FW']
    }, 
}, {
    timestamps: true
});



module.exports = mongoose.model('Player', playerSchema);