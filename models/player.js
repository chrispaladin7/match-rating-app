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
    isStater: Boolean
}, {
    timestamps: true
});



module.exports = mongoose.model('Player', playerSchema);