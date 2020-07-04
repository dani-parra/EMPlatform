let repository = {};
const bcrypt = require('bcrypt');
const poolInstance = global.db.dbpools;
const db = require('../../../../../db/db');
const AuthenticationModel = require('../../../../../models/authentication');
const jwt = require('../../../../../shared/shared');

/** imports section */
repository.validatePassword = (data) => {
    return new Promise((resolve, reject) => {
        db.getConnection(poolInstance).then(connection => {
            AuthenticationModel.validatePassword(connection, data.email).then(res => {
                bcrypt.compare(res, process.env.BCRYPT_HASH_SALT).then(res => {
                    jwt.generate()
                });
            }).catch(err => {
                console.log('[ERROR IN THE QUERY METHOD INVOCATION]');
                reject(err);
            });
        }).catch(err => {
            console.log('[ERROR IN THE CONNECTION METHOD INVOCATION]');
            reject(err);
        })
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