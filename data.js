exports.players = [
    { playerName: 'Aaron Ramsdale', playerNum: 1, teamName: 'Arsenal', position: 'GK' },
    { playerName: 'William Saliba', playerNum: 2, teamName: 'Arsenal', position: 'DF' },
    { playerName: 'Ben White', playerNum: 4, teamName: 'Arsenal', position: 'DF' },
    { playerName: 'Thomas Partey', playerNum: 5, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'Gabriel', playerNum: 6, teamName: 'Arsenal', position: 'DF' },
    { playerName: 'Bukayo Saka', playerNum: 7, teamName: 'Arsenal', position: 'FW' },
    { playerName: 'Martin Ødegaard', playerNum: 8, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'Gabriel Jesus', playerNum: 9, teamName: 'Arsenal', position: 'FW' },
    { playerName: 'Emile Smith Rowe', playerNum: 10, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'Gabriel Martinelli', playerNum: 11, teamName: 'Arsenal', position: 'FW' },
    { playerName: 'Jurriën Timber', playerNum: 12, teamName: 'Arsenal', position: 'DF' },
    { playerName: 'Eddie Nketiah', playerNum: 14, teamName: 'Arsenal', position: 'FW' },
    { playerName: 'Takehiro Tomiyasu', playerNum: 18, teamName: 'Arsenal', position: 'DF' },
    { playerName: 'Leandro Trossard', playerNum: 19, teamName: 'Arsenal', position: 'FW' },
    { playerName: 'Jorginho', playerNum: 20, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'Fábio Vieira', playerNum: 21, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'David Raya', playerNum: 22, teamName: 'Arsenal', position: 'GK' },
    { playerName: 'Kai Havertz', playerNum: 23, teamName: 'Arsenal', position: 'MF' },
    { playerName: 'Declan Rice', playerNum: 41, teamName: 'Arsenal', position: 'MF' },

    { playerName: 'Robert Sánchez', playerNum: 1, teamName: 'Chelsea', position: 'GK' },
    { playerName: 'Axel Disasi', playerNum: 2, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Cucurella', playerNum: 3, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Benoît Badiashile', playerNum: 5, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Thiago Silva', playerNum: 6, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Raheem Sterling', playerNum: 7, teamName: 'Chelsea', position: 'FW' },
    { playerName: 'Enzo Fernández', playerNum: 8, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Mykhaylo Mudryk', playerNum: 10, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Noni Madueke', playerNum: 11, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Marcus Bettinelli', playerNum: 13, teamName: 'Chelsea', position: 'GK' },
    { playerName: 'Nicolas Jackson', playerNum: 15, teamName: 'Chelsea', position: 'FW' },
    { playerName: 'Lesley Ugochukwu', playerNum: 16, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Carney Chukwuemeka', playerNum: 17, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Armando Broja', playerNum: 19, teamName: 'Chelsea', position: 'FW' },
    { playerName: 'Cole Palmer', playerNum: 20, teamName: 'Chelsea', position: 'FW' },
    { playerName: 'Ben Chilwell', playerNum: 21, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Conor Gallagher', playerNum: 23, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Ben Chilwell', playerNum: 24, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Moisés Caicedo', playerNum: 25, teamName: 'Chelsea', position: 'MF' },
    { playerName: 'Levi Colwill', playerNum: 26, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Malo Gusto', playerNum: 27, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Đorđe Petrović', playerNum: 28, teamName: 'Chelsea', position: 'GK' },
    { playerName: 'Ian Maatsen', playerNum: 29, teamName: 'Chelsea', position: 'DF' },
    { playerName: 'Wesley Fofana', playerNum: 33, teamName: 'Chelsea', position: 'DF' },

];

exports.match = [
  
    {
        matchTitle: 'CHEvARS', homeTeam: 'Chelsea', awayTeam: 'Arsenal', homeScore: 5, awayScore: 0, date: '12-12-2023', time: '16:30', stadium: 'Stamford Bridge', competition: 'English Premier League',
        homeTeamStarters: [{}],
        awayTeamStarters: [{}],
        homeTeamSubs: [{}],
        awayTeamSubs: [{}],
        ratings: [{ player: '', rating: 9 }],
        comments: [{ content: 'Chelsea is the best!!!',motm:'' }]
    }
];

exports.teams = [
    { name: 'Arsenal', abbreviation: 'ARS', nameOfCoach: 'Mikel Arteta', stadium: 'Emirates Stadium',league:'English Premier League', logo: 'https://s.hs-data.com/bilder/wappen/mittel/555.gif?fallback=png' },
    { name: 'Chelsea', abbreviation: 'CHE', nameOfCoach: 'Mauricio Pochettino', stadium: 'Stamford Bridge',league:'English Premier League', logo: 'https://s.hs-data.com/bilder/wappen/mittel/544.gif?fallback=png'},
    { name: 'Liverpool', abbreviation: 'LIV', nameOfCoach: 'Jürgen Klopp', stadium: 'Anfield',league:'English Premier League', logo: 'https://s.hs-data.com/bilder/wappen/mittel/550.gif?fallback=png'},
    { name: 'Manchester United', abbreviation: 'MUN', nameOfCoach: 'Erik ten Hag', stadium: 'Old Trafford',league:'English Premier League', logo: 'https://s.hs-data.com/bilder/wappen/mittel/543.gif?fallback=png'},
    { name: 'Real Madrid', abbreviation: 'RMD', nameOfCoach: 'Carlo Ancelotti', stadium: 'Santiago Bernabéu',league:'La Liga', logo: 'https://s.hs-data.com/bilder/wappen/mittel/532.gif?fallback=png'},
    { name: 'FC Barcelona', abbreviation: 'FCB', nameOfCoach: 'Xavi', stadium: 'Spotify Camp Nou',league:'La Liga', logo: 'https://s.hs-data.com/bilder/wappen/mittel/530.gif?fallback=png'},
]
