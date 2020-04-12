let gateway = {};
const serviceLogic = require('./service-logic');

gateway.login = (req, res) => {
    serviceLogic.login().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.logout = (req, res) => {
    serviceLogic.logout().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.refreshToken = (req, res) => {
    serviceLogic.refreshToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.newRecoveryToken = (req, res) => {
    serviceLogic.newRecoveryToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.validRecoveryToken = (req, res) => {
    serviceLogic.validRecoveryToken().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.updatePassword = (req, res) => {
    serviceLogic.updatePassword().then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

module.exports = gateway;