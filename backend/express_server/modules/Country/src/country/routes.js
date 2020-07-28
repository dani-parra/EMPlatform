const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/client/create',       gateway.create);
routes.put(     '/client/update',         gateway.update);
routes.get(     '/client/get',            gateway.get);
routes.get(     '/client/delete',         gateway.remove);

module.exports = routes;