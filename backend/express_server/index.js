const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`[EXPRESS SERVER RUNNING IN PORT ] ${process.env.PORT}`);
});