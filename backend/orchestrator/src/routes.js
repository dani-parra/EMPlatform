const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/login',                   gateway.login);
routes.put(     '/logout',                  gateway.logout);
routes.get(     '/newRecoveryToken',        gateway.newRecoveryToken);
routes.delete(  '/refreshToken',            gateway.refreshToken);
routes.delete(  '/updatePassword',          gateway.updatePassword);
routes.delete(  '/validRecoveryToken',      gateway.validRecoveryToken);

module.exports = routes;