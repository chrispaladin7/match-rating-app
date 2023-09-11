// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Match = require('./models/match');
const Team = require('./models/team');

const data = require('./data');

(async function () {
    let p1 = await Match.deleteMany({});
    let p2 = await Team.deleteMany({});

    let results = await Promise.all([p1, p2]);
    console.log(results);    


    results = await Promise.all([
        Match.create(data.match),
        Team.create(data.team)
    ]);
    console.log('Created matchees:', results[0]);
    console.log('Created teams:', results[1]);
    process.exit();
})();

