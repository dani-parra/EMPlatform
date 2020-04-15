const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log('[SERVER LISTENING IN PORT]: '+ process.env.PORT);
    /* command_executer.run() */
});