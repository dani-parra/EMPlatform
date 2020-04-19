const express = require('express');
let app = express();

/** modules routes imports */
const auth = require('./modules/authentication/src/auth/routes');

app.use('/',auth);

module.exports = app;