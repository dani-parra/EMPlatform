const http = require('http');

exports.makeRequest = (method, path, payload = {}, headers) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            path: path,
            headers: headers,
            body : payload
        };

        http[method](options, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(data).explanation);
                resolve(JSON.parse(data));
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err);
        });
    });
};