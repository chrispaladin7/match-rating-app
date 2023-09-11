
require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models

const Match = require('./models/match');
const Team = require('./models/team');
// const Performer = require('./models/performer');

// Example CRUD

// Top-level await (using await outside of an async function)
// has been available since Node v14.8
let matches = await Match.find({});
let teams = await Team.find({});
console.log(matches);
console.log(teams);