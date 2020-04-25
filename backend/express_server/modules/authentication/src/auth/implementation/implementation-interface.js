let service = {};
const repository = require('./mysql');
const implementations = {
    mysql_native: repository
};

service.validatePassword = data => {
    return new Promise((resolve, reject) => {
        implementations.mysql_native.validatePassword()
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