/** imports section */
let operations = {};

operations.getConnection = poolData => {
    return new Promise((resolve, reject) => {
        poolData.getConnection(function (error, connection) {
            if (error) reject(error);

            resolve(connection);
        });
    });
};

global.sharedFunctions.db = {};
global.sharedFunctions.db = operations;