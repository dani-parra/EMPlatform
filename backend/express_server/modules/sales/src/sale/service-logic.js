let service = {};
const bcrypt = require('bcrypt');
const repository = require('./implementation/implementation-interface');

service.registerSale = body => {
    return new Promise((resolve, reject) => {
        /** validate user password */
        repository.registerSale(body).then(res => {
            
        }).catch(err => {
            reject(err);
        });
    });
};

service.updateSale = body => {
    return new Promise((resolve, reject) => {

    });
};

service.getSale = body => {
    return new Promise((resolve, reject) => {

    });
};

service.deleteSale = body => {
    return new Promise((resolve, reject) => {

    });
};

module.exports = service;