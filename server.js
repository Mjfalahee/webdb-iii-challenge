const express = require('express');
const cohortRouter = require('./data/routers/cohortRouter');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> The server is running. </h2>`);
});

server.use('/api/cohorts', cohortRouter);

module.exports = server;