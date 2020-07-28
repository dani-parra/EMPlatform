const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/extrusion/create',       gateway.create);
routes.put(     '/extrusion/update',         gateway.update);
routes.get(     '/extrusion/get',            gateway.get);
routes.get(     '/extrusion/delete',         gateway.remove);

module.exports = routes;