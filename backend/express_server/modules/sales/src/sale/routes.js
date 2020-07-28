const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/sale/create',       gateway.create);
routes.put(     '/sale/update',         gateway.update);
routes.get(     '/sale/get',            gateway.get);
routes.get(     '/sale/delete',         gateway.remove);

module.exports = routes;