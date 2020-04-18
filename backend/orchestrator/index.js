const app = require('./app');
var command_executer = require('./resource/command-executer');

app.listen(process.env.PORT, () => {
    console.log('[SERVER LISTENING IN PORT]: '+ process.env.PORT);
    command_executer.run()
});