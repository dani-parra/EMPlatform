let repository = {};
const bcrypt = require('bcrypt');
let poolInstance = global.db.dbpools;
const AuthenticationModel = require('../../../../../models/authentication');

/** imports section */
repository.validatePassword = (connection, data) => {
    return new Promise((resolve, reject) => {
        AuthenticationModel.validatePassword(data.email).then(res => {
            bcrypt.compare(res, hash, function (err, result) {
                // result == true
            });
        }).catch(err => {

        });

    });
};

module.exports = operations;

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