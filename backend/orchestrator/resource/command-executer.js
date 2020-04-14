const { exec } = require("child_process");
const path = require('path');

exports.run = () => {
    let executionDirectoryPath = path.resolve(process.cwd(), process.env.SERVER_RUNNER_PATH, process.env.SERVER_APP);
    console.log('[CURRENT_PATH]', executionDirectoryPath)//path.format(executionDirectoryPath))

    /** open -a Terminal -n */

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

}