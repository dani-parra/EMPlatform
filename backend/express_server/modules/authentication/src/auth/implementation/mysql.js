let repository = {};
const bcrypt = require('bcrypt');
const AuthenticationModel = require('../models/authentication');

/** imports section */
repository.validatePassword = (connection, data) => {
    return new Promise((resolve, reject) => {
        AuthenticationModel.validatePassword(connection, data.email).then(res => {
            bcrypt.compare(res, process.env.BCRYPT_HASH_SALT).then(res => {
                jwt.generate()
            });
        }).catch(err => {
            console.log('[ERROR IN THE QUERY METHOD INVOCATION]');
            reject(err);
        });
    });
};


repository.logout = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.refreshToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.newRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.validRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.updatePassword = () => {
    return new Promise((resolve, reject) => {

    });
};

module.exports = repository;