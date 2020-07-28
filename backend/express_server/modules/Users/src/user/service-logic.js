let service = {};
import { v4 as uuidv4 } from 'uuid';
const repository = require('./implementation/implementation-interface');

service.create = (connection, body) => {
    return new Promise((resolve, reject) => {

        let userId = uuidv4();
        let newBody = {userId, ...body};

        repository.create(connection, newBody).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.update = (connection, body) => {
    return new Promise((resolve, reject) => {
        repository.update(connection, body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.get = (connection, body) => {
    return new Promise((resolve, reject) => {
        repository.get(connection, body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.delete = (connection, body) => {
    return new Promise((resolve, reject) => {
        repository.delete(connection, body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

module.exports = service;