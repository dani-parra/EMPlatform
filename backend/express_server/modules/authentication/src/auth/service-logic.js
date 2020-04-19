let service = {};
const bcrypt = require('bcrypt');
const repository = require('./implementation/implementation-interface');

service.login = body => {
    return new Promise((resolve, reject) => {
        /** validate user password */
        repository.validatePassword(body.password).then(res => {
            
        }).catch(err => {
            reject(err);
        });
    });
};

service.logout = () => {
    return new Promise((resolve, reject) => {

    });
};

service.refreshToken = () => {
    return new Promise((resolve, reject) => {

    });
};

service.newRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

service.validRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

service.updatePassword = () => {
    return new Promise((resolve, reject) => {

    });
};

module.exports = service;