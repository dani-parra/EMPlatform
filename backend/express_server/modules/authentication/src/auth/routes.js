const express = require('express');
const gateway = require('./gateway');
const routes = express();

routes.post(    '/user/login',                      gateway.login);
routes.get(     '/user/logout',                     gateway.logout); /** @TODO --> validate that the jwt cannot be used after this process */
routes.get(     '/user/token/refresh',              gateway.refreshToken);
routes.get(     '/user/password/token',             gateway.newRecoveryToken);
routes.get(     '/user/password/token/validate',    gateway.validRecoveryToken);
routes.put(     '/user/password/update',            gateway.updatePassword);

module.exports = routes;