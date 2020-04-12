let service = {};
const repository = require('./repository');

service.login = (req, res) => {
    repository.login().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

service.logout = (req, res) => {
    repository.logout().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

service.refreshToken = (req, res) => {
    repository.refreshToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

service.newRecoveryToken = (req, res) => {
    repository.newRecoveryToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

service.validRecoveryToken = (req, res) => {
    repository.validRecoveryToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

service.updatePassword = (req, res) => {
    repository.updatePassword().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

module.exports = service;