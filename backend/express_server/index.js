const app = require('./app');

/** temporal variables */
process.env.PORT = 8080;

app.listen(process.env.PORT, () => {
    console.log(`[EXPRESS SERVER RUNNING IN PORT ] ${process.env.PORT}`);
});