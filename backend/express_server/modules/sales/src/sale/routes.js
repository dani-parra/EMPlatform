const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/sale/register',       gateway.register);
routes.put(     '/sale/update',         gateway.update);
routes.get(     '/sale/get',            gateway.get);
routes.get(     '/sale/delete',         gateway.delete);

module.exports = routes;