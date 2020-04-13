const crypto = require('crypto-js');

exports.decryptData = function (req, res, next) {
    if (process.env.STAGE === 'DEV') next();

    try {
        req['_newBody'] = JSON.parse(crypto.AES.decrypt(req.body.data, process.env.SECRET_CIPHER_KEY).toString(CryptoJS.enc.Utf8));
        next();
    } catch (error) {
        res.status(400).send(error.toString());
    }
};