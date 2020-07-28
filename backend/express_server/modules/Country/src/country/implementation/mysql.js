let repository = {};
const statement = require('../../../../../models/statements');

/** imports section */
repository.create = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statement.saveCountry,
            timeout: process.env.QUERY_TIMEOUT
        },
            [
                data.id,
                data.value,
            ], (err, result) => {
                if (err) {
                    connection.release();
                    reject(err);
                } else {
                    if (release === true) {
                        connection.release();
                    }
                    resolve(result);
                }
            });
    });
};

repository.get = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        let query = statement.getCountry
        let params = [];

        if (data.id) {
            query += ' where id = ?';
            params.push(data.id);
        }


        connection.query({
            sql: query,
            timeout: process.env.QUERY_TIMEOUT
        }, params, (err, result) => {
            if (err) {
                connection.release();
                reject(err);
            } else {
                if (release === true) {
                    connection.release();
                }
                resolve(result);
            }
        });
    });
};

repository.update = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        let query = statements.updateCountry;
        let params = [];
        /** validate the entity changes and params handler*/
        if (data.value) { query += 'value = ?'; params.push(data.value) }

        /** filter data */
        query += ' where id = ?';
        params.push(data.id);

        connection.query({
            sql: query,
            timeout: process.env.QUERY_TIMEOUT
        }, params, (err, result) => {
            if (err) {
                connection.release();
                reject(err);
            } else {
                if (release === true) {
                    connection.release();
                }
                resolve(result);
            }
        });
    });
};

repository.remove = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        let query = statements.removeCountry;
        let params = [];
        /** params handler */
        query += ' id = ?';
        params.push(data.id);

        connection.query({
            sql: query,
            timeout: process.env.QUERY_TIMEOUT
        }, params,
            (err, result) => {
                if (err) {
                    connection.release();
                    reject(err);
                } else if (result.affectedRows == 0) {
                    reject({
                        Error: 'There is no entry with that id',
                    })
                } else {
                    if (release === true) {
                        connection.release();
                    }
                    resolve(result);
                }

            });
    });
};



module.exports = repository;