let service = {};
const repository = require('./mysql');
const implementations = {
    mysql_native: repository
};

service.register = (connection, data) => {
    return new Promise((resolve, reject) => {
        implementations.mysql_native.register(connection, data).then(res => {
            resolve(res);
        }).catch(err => reject(err));
    });
};

service.update = (connection, data) => {
    return new Promise((resolve, reject) => {
        implementations.mysql_native.update(connection, data).then(res => {
            resolve(res);
        }).catch(err => reject(err));
    });
};

service.get = (connection, data) => {
    return new Promise((resolve, reject) => {
        implementations.mysql_native.get(connection, data).then(res => {
            resolve(res);
        }).catch(err => reject(err));
    });
};

service.delete = (connection, data) => {
    return new Promise((resolve, reject) => {
        implementations.mysql_native.delete(connection, data).then(res => {
            resolve(res);
        }).catch(err => reject(err));
    });
};

module.exports = service;