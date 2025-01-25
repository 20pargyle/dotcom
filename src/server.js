const {Server, Origins } = require('boardgame.io/server');
const { dotcom } = require('./Game');

const server = Server({
    games: [dotcom],
    origins: [Origins.LOCALHOST],
});

server.run(8000);