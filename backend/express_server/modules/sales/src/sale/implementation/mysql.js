let repository = {};
const statement = require('../../../../../models/statements');

/** imports section */
repository.register = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        connection.query({
            sql: statement.saveNewSale,
            timeout: process.env.QUERY_TIMEOUT
        },
            [
                data.saleId,
                data.productId,
                data.amount,
                data.sellerId,
                data.buyerId,
                new Date().getTime()
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
        let query = statement.getSale
        let params = [];

        if(data.id){
            query += ' where saleId = ?';
            params.push(data.id);
        }


        connection.query({
            sql: query,
            timeout: process.env.QUERY_TIMEOUT
        },params, (err, result) => {
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
        let query = statements.updateSaleData;
        let params = [];
        /** validate the entity changes and params handler*/
        if (data.productId) { query += 'productId = ?,'; params.push(data.productId) }
        if (data.amount) { query += 'amount = ?,'; params.push(data.amount) }
        if (data.sellerId) { query += 'sellerId = ?,'; params.push(data.sellerId) }
        if (data.buyerId) { query += 'buyerId = ?,'; params.push(data.buyerId) }

        if (query.endsWith(",")) {
            query = global.sharedFunctions.removeLastElements(query, 1);
        }

        /** filter data */
        query += ' where saleId = ?';
        params.push(data.id);

        connection.query({
            sql: query,
            timeout: process.env.QUERY_TIMEOUT
        }, params , (err, result) => {
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

operations.removeReward = (connection, data, release = true) => {
    return new Promise((resolve, reject) => {
        let query = statements.removeReward;
        let params = [];
        /** params handler */
        query += ' saleId = ?';
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