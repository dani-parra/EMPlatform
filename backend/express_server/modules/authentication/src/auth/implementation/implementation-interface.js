let service = {};
const repository = require('./mysql-native');
const implementations = {
    mysql_native: repository
};

service.login = () => {
    return new Promise((resolve, reject) => {

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