let repository = {};
const bcrypt = require('bcrypt');
const AuthenticationModel = require('../models/authentication');

/** imports section */
repository.login = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statements.getUserInfo,
            timeout: process.env.QUERY_TIMEOUT
        },
            [data.email],
            (err, result) => {
                if (err) {
                    reject(err);
                }

                bcrypt.compare(result.password, process.env.BCRYPT_HASH_SALT).then(res => {
                    if (res === true) {
                        let newJWT = global.shared.methods.generate();
                        resolve(newJWT);
                        return;
                    }

                    reject({
                        error: "the provided password doesn't match"
                    });
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