require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models

const Match = require('./models/match');
const Team = require('./models/team');

let matches = await Match.find({});
let teams = await Team.find({});
console.log(matches);
console.log(teams);