const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const command_executer = require('./resource/command-executer');
const decryptMiddleware = require('./middlewares/decrypt').decryptData;

/** CORS CONFIGURATION */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ACCEPTED_ORIGIN_HOSTS);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(bodyParser.json());

app.post('/*',decryptMiddleware,(req,res)=> {});

module.exports = app;