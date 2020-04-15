const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const request = require('../resource/request');

const deconstructRequestData = (req) => {
    let payload = req['body'] ? req['body'] : {};
    return {
        path: req['url'],
        method: req['method'],
        payload,
    }
};

const JWTValidation = headers => {
    return new Promise((resolve, reject) => {
        try {
            if (jwt.verify(headers['Authorization'], process.env.JWT_SECRET).userId) resolve('valid');
        } catch (error) {
            reject(error);
        }
    });
};

exports.decryptData = async function (req, res, next) {

    try {
        /** Middleware phases */
        
        /** Phase 1 --> JWT VALIDATION */
        let jwtResponse = await JWTValidation(req.headers);

        /** Phase 2 --> SERVICE REDIRECTION */
        request.makeRequest(req['method'],req['url'],req['body'],req['headers'])

    } catch (err) {

    }

    console.log('[REQ]', req['method'], req['url'], req['body'])
    if (process.env.STAGE === 'DEV') {
        //req['_newBody'] = deconstructRequestData(req);
        next()
    };

    try {
        let cleanRequest = JSON.parse(crypto.AES.decrypt(req.body.data, process.env.SECRET_CIPHER_KEY).toString(CryptoJS.enc.Utf8));
        //req['_newBody'] = deconstructRequestData(cleanRequest);

        next();
    } catch (error) {
        res.status(400).send(error.toString());
    }
};