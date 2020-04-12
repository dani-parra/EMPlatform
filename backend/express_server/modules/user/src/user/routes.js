const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post('/create', gateway.create);
routes.put('/:userId', gateway.update);
routes.get('/:userId', gateway.get);
routes.delete('/:userId', gateway.delete);

module.exports = routes;