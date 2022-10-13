const express = require('express');
const routerAuth = require('../routes/auth/authRouter');
const server = express();

server.use(express.json());
server.use('/auth', routerAuth);

module.exports = server