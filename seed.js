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

        //Manchester United Team
        { team: teams[2], playerName: 'Altay Bayındır', playerNum: 1, position: 'GK', isStarter: false },
        { team: teams[2], playerName: 'Victor Lindelöf', playerNum: 2, position: 'DF', isStarter: false },
        { team: teams[2], playerName: 'Sofyan Amrabat', playerNum: 4, position: 'MF', isStarter: false },
        { team: teams[2], playerName: 'Harry Maguire', playerNum: 5, position: 'DF', isStarter: false },
        { team: teams[2], playerName: 'Lisandro Martínez', playerNum: 6, position: 'DF', isStarter: true },
        { team: teams[2], playerName: 'Mason Mount', playerNum: 7, position: 'MF', isStarter: true },
        { team: teams[2], playerName: 'Bruno Fernandes', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[2], playerName: 'Marcus Rashford', playerNum: 10, position: 'FW', isStarter: true },
        { team: teams[2], playerName: 'Rasmus Højlund', playerNum: 11, position: 'FW', isStarter: true },
        { team: teams[2], playerName: 'Tyrell Malacia', playerNum: 12, position: 'DF', isStarter: false },
        { team: teams[2], playerName: 'Christian Eriksen', playerNum: 14, position: 'MF', isStarter: false },
        { team: teams[2], playerName: 'Reguilón', playerNum: 15, position: 'DF', isStarter: false },
        { team: teams[2], playerName: 'Amad', playerNum: 16, position: 'FW', isStarter: false },
        { team: teams[2], playerName: 'Alejandro Garnacho', playerNum: 17, position: 'FW', isStarter: false },
        { team: teams[2], playerName: 'Casemiro', playerNum: 18, position: 'MF', isStarter: true },
        { team: teams[2], playerName: 'Raphaël Varane', playerNum: 19, position: 'DF', isStarter: true },
        { team: teams[2], playerName: 'Diogo Dalot', playerNum: 20, position: 'DF', isStarter: false },
        { team: teams[2], playerName: 'Antony', playerNum: 21, position: 'MF', isStarter: true },
        { team: teams[2], playerName: 'Tom Heaton', playerNum: 22, position: 'GK', isStarter: false },
        { team: teams[2], playerName: 'Luke Shaw', playerNum: 23, position: 'DF', isStarter: true },
        { team: teams[2], playerName: 'André Onana', playerNum: 24, position: 'GK', isStarter: true },
        { team: teams[2], playerName: 'Jadon Sancho', playerNum: 25, position: 'FW', isStarter: false },
        { team: teams[2], playerName: 'Aaron Wan-Bissaka', playerNum: 29, position: 'DF', isStarter: true },

        //Liverpool Team
        { team: teams[3], playerName: 'Alisson', playerNum: 1, position: 'GK', isStarter: true },
        { team: teams[3], playerName: 'Joe Gomez', playerNum: 2, position: 'DF', isStarter: false },
        { team: teams[3], playerName: 'Wataru Endo', playerNum: 3, position: 'MF', isStarter: false },
        { team: teams[3], playerName: 'Virgil van Dijk', playerNum: 4, position: 'DF', isStarter: true },
        { team: teams[3], playerName: 'Ibrahima Konaté', playerNum: 5, position: 'DF', isStarter: true },
        { team: teams[3], playerName: 'Thiago', playerNum: 6, position: 'MF', isStarter: true },
        { team: teams[3], playerName: 'Luis Díaz', playerNum: 7, position: 'MF', isStarter: true },
        { team: teams[3], playerName: 'Dominik Szoboszlai', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[3], playerName: 'Alexis Mac Allister', playerNum: 10, position: 'MF', isStarter: true },
        { team: teams[3], playerName: 'Mo Salah', playerNum: 11, position: 'FW', isStarter: true },
        { team: teams[3], playerName: 'Adrián', playerNum: 13, position: 'GK', isStarter: false },
        { team: teams[3], playerName: 'Curtis Jones', playerNum: 17, position: 'MF', isStarter: false },
        { team: teams[3], playerName: 'Cody Gakpo', playerNum: 18, position: 'FW', isStarter: true },
        { team: teams[3], playerName: 'Diogo Jota', playerNum: 20, position: 'FW', isStarter: false },
        { team: teams[3], playerName: 'Kostas Tsimikas', playerNum: 21, position: 'DF', isStarter: false },
        { team: teams[3], playerName: 'Andy Robertson', playerNum: 26, position: 'DF', isStarter: true },
        { team: teams[3], playerName: 'Darwin Núñez', playerNum: 27, position: 'FW', isStarter: false },
        { team: teams[3], playerName: 'Joel Matip', playerNum: 32, position: 'DF', isStarter: false },
        { team: teams[3], playerName: 'Ryan Gravenberch', playerNum: 38, position: 'MF', isStarter: false },
        { team: teams[3], playerName: 'Trent Alexander-Arnold', playerNum: 66, position: 'DF', isStarter: true },

        //Barcelona Team
        { team: teams[4], playerName: 'Marc-André ter Stegen', playerNum: 1, position: 'GK', isStarter: true },
        { team: teams[4], playerName: 'João Cancelo', playerNum: 2, position: 'DF', isStarter: true },
        { team: teams[4], playerName: 'Ronald Araújo', playerNum: 4, position: 'MF', isStarter: false },
        { team: teams[4], playerName: 'Iñigo Martínez', playerNum: 5, position: 'DF', isStarter: false },
        { team: teams[4], playerName: 'Gavi', playerNum: 6, position: 'MF', isStarter: true },
        { team: teams[4], playerName: 'Ferran Torres', playerNum: 7, position: 'FW', isStarter: false },
        { team: teams[4], playerName: 'Pedri', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[4], playerName: 'Robert Lewandowski', playerNum: 9, position: 'FW', isStarter: true },
        { team: teams[4], playerName: 'Raphinha', playerNum: 11, position: 'FW', isStarter: true },
        { team: teams[4], playerName: 'Iñaki Peña', playerNum: 13, position: 'GK', isStarter: false },
        { team: teams[4], playerName: 'João Félix', playerNum: 14, position: 'FW', isStarter: true },
        { team: teams[4], playerName: 'Andreas Christensen', playerNum: 15, position: 'DF', isStarter: true },
        { team: teams[4], playerName: 'Marcos Alonso', playerNum: 17, position: 'DF', isStarter: true },
        { team: teams[4], playerName: 'Oriol Romeu', playerNum: 18, position: 'MF', isStarter: false },
        { team: teams[4], playerName: 'Sergi Roberto', playerNum: 20, position: 'MF', isStarter: false },
        { team: teams[4], playerName: 'Frenkie de Jong', playerNum: 21, position: 'MF', isStarter: true },
        { team: teams[4], playerName: 'İlkay Gündoğan', playerNum: 22, position: 'MF', isStarter: false },
        { team: teams[4], playerName: 'Jules Koundé', playerNum: 23, position: 'DF', isStarter: true },
        { team: teams[4], playerName: 'Lamine Yamal', playerNum: 27, position: 'FW', isStarter: false },
        { team: teams[4], playerName: 'Álex Balde', playerNum: 28, position: 'DF', isStarter: false },

        //Real Madrid Team
        { team: teams[5], playerName: 'Thibaut Courtois', playerNum: 1, position: 'GK', isStarter: true },
        { team: teams[5], playerName: 'Dani Carvajal', playerNum: 2, position: 'DF', isStarter: true },
        { team: teams[5], playerName: 'Eder Militão', playerNum: 3, position: 'DF', isStarter: true },
        { team: teams[5], playerName: 'David Alaba', playerNum: 4, position: 'DF', isStarter: true },
        { team: teams[5], playerName: 'Jude Bellingham', playerNum: 5, position: 'MF', isStarter: true },
        { team: teams[5], playerName: 'Nacho', playerNum: 6, position: 'MF', isStarter: true },
        { team: teams[5], playerName: 'Vinícius Junior', playerNum: 7, position: 'FW', isStarter: true },
        { team: teams[5], playerName: 'Toni Kroos', playerNum: 8, position: 'MF', isStarter: true },
        { team: teams[5], playerName: 'Luka Modrić', playerNum: 10, position: 'FW', isStarter: true },
        { team: teams[5], playerName: 'Rodrygo', playerNum: 11, position: 'FW', isStarter: true },
        { team: teams[5], playerName: 'Eduardo Camavinga', playerNum: 12, position: 'FW', isStarter: true },
        { team: teams[5], playerName: 'Andriy Lunin', playerNum: 13, position: 'GK', isStarter: false },
        { team: teams[5], playerName: 'Joselu', playerNum: 17, position: 'DF', isStarter: false },
        { team: teams[5], playerName: 'Aurélien Tchouaméni', playerNum: 18, position: 'MF', isStarter: false },
        { team: teams[5], playerName: 'Dani Ceballos', playerNum: 19, position: 'MF', isStarter: false },
        { team: teams[5], playerName: 'Fran García', playerNum: 20, position: 'MF', isStarter: false },
        { team: teams[5], playerName: 'Brahim Díaz', playerNum: 21, position: 'MF', isStarter: false },
        { team: teams[5], playerName: 'Antonio Rüdiger', playerNum: 22, position: 'MF', isStarter: false },
        { team: teams[5], playerName: 'Ferland Mendy', playerNum: 23, position: 'DF', isStarter: false },
        { team: teams[5], playerName: 'Arda Güler', playerNum: 24, position: 'FW', isStarter: false },
        { team: teams[5], playerName: 'Kepa', playerNum: 25, position: 'FW', isStarter: false },
    ];

    const players = await Player.create(playerData);

    const matchData = [
        {
            matchTitle: 'CHEvARS', homeTeam: teams[1]._id, awayTeam: teams[0]._id, homeScore: 5, awayScore: 0, date: '2023-12-12T16:30', stadium: 'Stamford Bridge', competition: 'English Premier League',
            comments: [{ content: 'Chelsea is the best!!!', motm: '' }]
        },
        {
            matchTitle: 'LIVvMUN', homeTeam: teams[3]._id, awayTeam: teams[2]._id, homeScore: 3, awayScore: 3, date: '2023-12-12T16:30', stadium: 'Old Trafford', competition: 'English Premier League',
            comments: [{ content: 'Good Game!!!', motm: '' }]
        },
        {
            matchTitle: 'LIVvMUN', homeTeam: teams[3]._id, awayTeam: teams[2]._id, homeScore: 1, awayScore: 0, date: '2023-12-12T16:30', stadium: 'Anfield', competition: 'English Premier League',
            comments: [{ content: 'Good Game!!!', motm: '' }]
        },
        {
            matchTitle: 'FCBvRMD', homeTeam: teams[4]._id, awayTeam: teams[5]._id, homeScore: 0, awayScore: 0, date: '2024-01-07T18:00', stadium: 'Spotify Camp Nou', competition: 'La Liga',
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

