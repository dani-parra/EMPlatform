const express = require('express');
let app = express();

//initialize shared functions
const sharedM = require('./shared/shared');
const pool = require('./db/singletonPool');
const DBMethods = require('./db/db');


//set global elements
global.shared = {
    methods : sharedM,
    db : DBMethods,
    pool : pool
};

/** modules routes imports */
const auth = require('./modules/authentication/src/auth/routes');
const sales = require('./modules/sales/src/sale/routes');

app.use('/',auth);
app.use('/',sales);

module.exports = app;