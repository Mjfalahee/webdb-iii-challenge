const express = require('express');
const cohortRouter = require('./data/routers/cohortRouter');
const studentsRouter = require('./data/routers/studentsRouter');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> The server is running. </h2>`);
});

server.use('/api/cohorts', cohortRouter);
server.use('/api/students', studentsRouter);

module.exports = server;