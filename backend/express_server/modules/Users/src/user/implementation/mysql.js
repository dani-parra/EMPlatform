let repository = {};
const statement = require('../../../../../models/statements');

/** imports section */
repository.create = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statement.saveUser,
            timeout: process.env.QUERY_TIMEOUT
        },
            [
                data.userId,
                data.identification,
                data.identificationType,
                data.name,
                data.lastName,
                data.cityId,
                data.countryId,
                data.userNumber,
                data.userType
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
        let query = statement.getUser
        let params = [];

        if (data.id) {
            query += ' where userId = ?';
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
        let query = statements.updateUser;
        let params = [];
        /** validate the entity changes and params handler*/
        if (data.identification) { query += 'identification = ?,'; params.push(data.identification) }
        if (data.identificationType) { query += 'identificationType = ?,'; params.push(data.identificationType) }
        if (data.name) { query += 'name = ?,'; params.push(data.name) }
        if (data.lastName) { query += 'lastName = ?,'; params.push(data.lastName) }
        if (data.cityId) { query += 'cityId = ?,'; params.push(data.cityId) }
        if (data.countryId) { query += 'countryId = ?,'; params.push(data.countryId) }
        if (data.userNumber) { query += 'userNumber = ?,'; params.push(data.userNumber) }
        if (data.userType) { query += 'userType = ?,'; params.push(data.userType) }

        if (query.endsWith(",")) {
            query = global.sharedFunctions.removeLastElements(query, 1);
        }

        /** filter data */
        query += ' where userId = ?';
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
        let query = statements.removeUser;
        let params = [];
        /** params handler */
        query += ' userId = ?';
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