let repository = {};
const statement = require('../../../../../models/statements');

/** imports section */
repository.registerSale = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statement.saveNewSale,
            timeout: process.env.QUERY_TIMEOUT
        },
            [
                data.name,
                data.description,
                data.informationURL,
                data.fk_Experience_Content
            ], (err, result) => {
                if (err) {
                    connection.release();
                    reject(err);
                } else {
                    if (release === true) {
                        connection.destroy();
                    }
                    resolve(result);
                }
            });
    });
};

module.exports = operations;

repository.logout = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.refreshToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.newRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.validRecoveryToken = () => {
    return new Promise((resolve, reject) => {

    });
};

repository.updatePassword = () => {
    return new Promise((resolve, reject) => {

    });
};

module.exports = repository;