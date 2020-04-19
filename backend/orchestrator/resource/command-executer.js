const { exec } = require("child_process");
const path = require("path");

exports.run = async () => {
  /** set the path for the server */
  let executionDirectoryPath = path.resolve(
    process.cwd(),
    process.env.SERVER_RUNNER_PATH,
    process.env.SERVER_APP
  );

  /** Run the server and services sub-servers */
  /** steps */

  /** Step 1- generate the terminals */
  await generateTerminals(1, executionDirectoryPath);
  await startExposeTunnel(executionDirectoryPath);

  /** Step 2- run the express and java servers */
  /** set the path for the server */
  executionDirectoryPath = path.resolve(process.cwd(), "../express_server");
  await generateTerminals(1, executionDirectoryPath);
  startExpressServer(executionDirectoryPath);
};

generateTerminals = (terminalNumber, executionDirectoryPath) => {
  return new Promise((resolve, reject) => {
    exec(
      "sudo command_terminals_handler -set " + terminalNumber,
      { cwd: executionDirectoryPath || "" },
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(error.message);
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject(stderr);
        }

        resolve();
      }
    );
  });
};

startExposeTunnel = (executionDirectoryPath) => {
  return new Promise((resolve, reject) => {
    exec(
      `command_terminals_handler -run 0 ./ngrok http ${process.env.EXPOSED_PORT}`,
      { cwd: executionDirectoryPath },
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(error);
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject(stderr);
        }
        console.log(`stdout: ${stdout}`);
        resolve();
      }
    );
  });
};

startExpressServer = executionDirectoryPath => {
  return new Promise((resolve, reject) => {
    exec(
      `command_terminals_handler -run 1 PORT=${process.env.EXPRESS_SERVER_PORT} node index.js`,
      { cwd: executionDirectoryPath },
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(error);
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject(stderr);
        }
        console.log(`stdout: ${stdout}`);
        resolve();
      }
    );
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
