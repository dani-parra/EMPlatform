let gateway = {};
const serviceLogic = require('./service-logic');

gateway.create = (req, res) => {
    serviceLogic.create(req._cleanBody || req.body).then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.update = (req, res) => {
    serviceLogic.update(req._cleanBody || req.body).then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.get = (req, res) => {
    serviceLogic.get(req._cleanBody || req.body).then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

gateway.remove = (req, res) => {
    serviceLogic.remove(req._cleanBody || req.body).then(res => {
        res.status(200).send(res);
    }).catch(err => {
        res.send(400).send({error : err});
    });
};

module.exports = gateway;