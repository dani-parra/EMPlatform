const express = require('express');
global.db.dbpools = require('./db/singletonPool');
let app = express();

//initialize shared functions
require('./db/singletonPool');
require('./shared/shared');
require('./db/db');

/** modules routes imports */
const auth = require('./modules/authentication/src/auth/routes');
const sales = require('./modules/sales/src/sale/routes');

app.use('/',auth);
app.use('/',sales);

module.exports = app;