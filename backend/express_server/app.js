const express = require('express');
global.db.dbpools = require('./db/singletonPool');
let app = express();

/** modules routes imports */
const auth = require('./modules/authentication/src/auth/routes');

app.use('/',auth);

module.exports = app;