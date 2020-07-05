/** imports section */
let operations = {};
const statements = require('./statements');

operations.validatePassword = (connection, email) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statements.getUserInfo,
            timeout: process.env.QUERY_TIMEOUT
        },
        [ email ], 
        (err, result) => {
            if (err) {
                connection.release();
                reject(err);
            } else {
                connection.release();
                resolve(result);
            }
        });
    });
};

module.exports = operations;