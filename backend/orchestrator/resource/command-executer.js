const { exec } = require("child_process");
const path = require('path');

exports.run = () => {
    let executionDirectoryPath = path.resolve(process.cwd(), process.env.SERVER_RUNNER_PATH, process.env.SERVER_APP);
    console.log('[CURRENT_PATH]', executionDirectoryPath)
    let promisesArray = [];
    /** Run the server and services sub-servers */
    /** steps */

    /** Step 1- generate the terminals */
    promisesArray.push(generateTerminals(1));
    /** Step 2- run the express and java servers */
    promisesArray.push(startExpressServer());

    Promise.all(promisesArray).then(() => {
        console.log('[SUCCESSFULL PROCESS]');
    }).catch(err => {
        console.log('[ERROR]' + err.toString());
    });
}

generateTerminals = terminalNumber => {
    return new Promise((resolve, reject) => {
        exec("sudo command_terminals_handler -set " + terminalNumber, { cwd: executionDirectoryPath }, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                reject(error.message);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                reject(stderr);
            }

            resolve();
        });
    })
};

startExpressServer = () => {
    let executionDirectoryPath = path.resolve(process.cwd(), process.env.EXPRESS_SERVER_PATH);
    exec(`PORT=${process.env.EXPRESS_SERVER_PORT} node index`, { cwd: executionDirectoryPath }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
};

/* startJavaServer = () => {
    let executionDirectoryPath = path.resolve(process.cwd(), process.env.JAVA_SERVER_PATH);
    exec("./ngrok http " + process.env.PORT, { cwd: executionDirectoryPath }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}; */