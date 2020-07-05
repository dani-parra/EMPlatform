let service = {};
const repository = require('./implementation/implementation-interface');

service.register = body => {
    return new Promise((resolve, reject) => {

        // set the saleId
        let id = `${body.productId}-${body.buyerId}-${new Date().getTime()}`
        let newBody = {saleId : id, ...newBody};

        repository.register(newBody).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.update = body => {
    return new Promise((resolve, reject) => {
        repository.update(body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.get = body => {
    return new Promise((resolve, reject) => {
        repository.get(body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

service.delete = body => {
    return new Promise((resolve, reject) => {
        repository.delete(body).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

module.exports = service;