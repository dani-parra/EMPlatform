const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/city/create',       gateway.create);
routes.put(     '/city/update',         gateway.update);
routes.get(     '/city/get',            gateway.get);
routes.get(     '/city/delete',         gateway.remove);

module.exports = routes;