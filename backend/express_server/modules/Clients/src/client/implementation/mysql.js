let repository = {};
const statement = require('../../../../../models/statements');

/** imports section */
repository.create = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statement.saveClient,
            timeout: process.env.QUERY_TIMEOUT
        },
            [
                data.clientId,
                data.address,
                data.clientNumber,
                data.name,
                data.owners
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
        let query = statement.getClient
        let params = [];

        if (data.id) {
            query += ' where clientId = ?';
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
        let query = statements.updateClient;
        let params = [];
        /** validate the entity changes and params handler*/
        if (data.clientId) { query += 'clientId = ?,'; params.push(data.clientId) }
        if (data.address) { query += 'address = ?,'; params.push(data.address) }
        if (data.clientNumber) { query += 'clientNumber = ?,'; params.push(data.clientNumber) }
        if (data.name) { query += 'name = ?,'; params.push(data.name) }
        if (data.owners) { query += 'owners = ?,'; params.push(data.owners) }

        if (query.endsWith(",")) {
            query = global.sharedFunctions.removeLastElements(query, 1);
        }

        /** filter data */
        query += ' where clientId = ?';
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
        let query = statements.removeClient;
        let params = [];
        /** params handler */
        query += ' clientId = ?';
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