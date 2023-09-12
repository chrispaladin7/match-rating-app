// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Match = require('./models/match');
const Team = require('./models/team');
const Player = require('./models/player');

const data = require('./data');



(async function () {
    await Match.deleteMany({});
    await Team.deleteMany({});
    await Player.deleteMany({});


    const teams = await Team.create(data.teams);

    const playerData = [
        //Arsenal Team
        { team: teams[0], playerName: 'Aaron Ramsdale', playerNum: 1, position: 'GK', isStarter: true },
        { team: teams[0], playerName: 'William Saliba', playerNum: 2, position: 'DF', isStarter: true },
        { team: teams[0], playerName: 'Ben White', playerNum: 4, position: 'DF', isStarter: true },
        { team: teams[0], playerName: 'Thomas Partey', playerNum: 5, position: 'MF', isStarter: true },
        { team: teams[0], playerName: 'Gabriel', playerNum: 6, position: 'DF', isStarter: true },
        { team: teams[0], playerName: 'Bukayo Saka', playerNum: 7, position: 'FW', isStarter: true },
        { team: teams[0], playerName: 'Martin Ødegaard', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[0], playerName: 'Gabriel Jesus', playerNum: 9, position: 'FW', isStarter: true },
        { team: teams[0], playerName: 'Emile Smith Rowe', playerNum: 10, position: 'MF', isStarter: false },
        { team: teams[0], playerName: 'Gabriel Martinelli', playerNum: 11, position: 'FW', isStarter: true },
        { team: teams[0], playerName: 'Jurriën Timber', playerNum: 12, position: 'DF', isStarter: true },
        { team: teams[0], playerName: 'Eddie Nketiah', playerNum: 14, position: 'FW', isStarter: false },
        { team: teams[0], playerName: 'Takehiro Tomiyasu', playerNum: 18, position: 'DF', isStarter: false },
        { team: teams[0], playerName: 'Leandro Trossard', playerNum: 19, position: 'FW', isStarter: false },
        { team: teams[0], playerName: 'Jorginho', playerNum: 20, position: 'MF', isStarter: false },
        { team: teams[0], playerName: 'Fábio Vieira', playerNum: 21, position: 'MF', isStarter: false },
        { team: teams[0], playerName: 'David Raya', playerNum: 22, position: 'GK', isStarter: false },
        { team: teams[0], playerName: 'Kai Havertz', playerNum: 23, position: 'MF', isStarter: false },
        { team: teams[0], playerName: 'Declan Rice', playerNum: 41, position: 'MF', isStarter: true },
    
        //Chelsea Team
        { team: teams[1], playerName: 'Robert Sánchez', playerNum: 1, position: 'GK', isStarter: true },
        { team: teams[1], playerName: 'Axel Disasi', playerNum: 2, position: 'DF', isStarter: true },
        { team: teams[1], playerName: 'Cucurella', playerNum: 3, position: 'DF', isStarter: false },
        { team: teams[1], playerName: 'Benoît Badiashile', playerNum: 5, position: 'DF', isStarter: true },
        { team: teams[1], playerName: 'Thiago Silva', playerNum: 6, position: 'DF', isStarter: false },
        { team: teams[1], playerName: 'Raheem Sterling', playerNum: 7, position: 'FW', isStarter: true },
        { team: teams[1], playerName: 'Enzo Fernández', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[1], playerName: 'Mykhaylo Mudryk', playerNum: 10, position: 'MF', isStarter: false },
        { team: teams[1], playerName: 'Noni Madueke', playerNum: 11, position: 'MF', isStarter: false },
        { team: teams[1], playerName: 'Marcus Bettinelli', playerNum: 13, position: 'GK', isStarter: false },
        { team: teams[1], playerName: 'Nicolas Jackson', playerNum: 15, position: 'FW', isStarter: true },
        { team: teams[1], playerName: 'Lesley Ugochukwu', playerNum: 16, position: 'MF', isStarter: false },
        { team: teams[1], playerName: 'Carney Chukwuemeka', playerNum: 17, position: 'MF', isStarter: true },
        { team: teams[1], playerName: 'Armando Broja', playerNum: 19, position: 'FW', isStarter: false },
        { team: teams[1], playerName: 'Cole Palmer', playerNum: 20, position: 'FW', isStarter: false },
        { team: teams[1], playerName: 'Ben Chilwell', playerNum: 21, position: 'DF', isStarter: true },
        { team: teams[1], playerName: 'Conor Gallagher', playerNum: 23, position: 'MF', isStarter: false },
        { team: teams[1], playerName: 'Reece James', playerNum: 24, position: 'DF', isStarter: true },
        { team: teams[1], playerName: 'Moisés Caicedo', playerNum: 25, position: 'MF', isStarter: true },
        { team: teams[1], playerName: 'Levi Colwill', playerNum: 26, position: 'DF', isStarter: true },
        { team: teams[1], playerName: 'Malo Gusto', playerNum: 27, position: 'DF', isStarter: false },
        { team: teams[1], playerName: 'Đorđe Petrović', playerNum: 28, position: 'GK', isStarter: false },
        { team: teams[1], playerName: 'Ian Maatsen', playerNum: 29, position: 'DF', isStarter: false },
        { team: teams[1], playerName: 'Wesley Fofana', playerNum: 33, position: 'DF', isStarter: false },
    ];

    const players = await Player.create(playerData);

    const matchData = [
        {
            matchTitle: 'CHEvARS', homeTeam: teams[1]._id, awayTeam: teams[0]._id, homeScore: 5, awayScore: 0, date: '2023-12-12T16:30', stadium: 'Stamford Bridge', competition: 'English Premier League',
            comments: [{ content: 'Chelsea is the best!!!', motm: '' }]
        },
        {
            matchTitle: 'CHEvMUN', homeTeam: teams[1]._id, awayTeam: teams[3]._id, homeScore: 3, awayScore: 3, date: '2023-12-12T16:30', stadium: 'Old Trafford', competition: 'English Premier League',
            comments: [{ content: 'Good Game!!!', motm: '' }]
        }
    ];

    const matches = await Match.create(matchData);

    for (let m of matches) {
        m.homeStarters = players.filter(p => p.team._id.equals(m.homeTeam) && p.isStarter);
        m.homeSubs = players.filter(p => p.team._id.equals(m.homeTeam) && !p.isStarter);
        m.awayStarters = players.filter(p => p.team._id.equals(m.awayTeam) && p.isStarter);
        m.awaySubs = players.filter(p => p.team._id.equals(m.awayTeam) && !p.isStarter);
        await m.save();
    }

    console.log('Created matches:', matches);
    console.log('Created teams:', teams);
    console.log('Created home players:', matches[0].homeStarters);
    console.log('Created home subs:', matches[0].homeSubs);
    console.log('Created away players:', matches[0].awayStarters);
    console.log('Created away subs:', matches[0].awaySubs);

    process.exit();
})();

