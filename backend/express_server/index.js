const express = require('express');
let app = express();

app.get('/',(req,res) => { res.status(200).send({ server : 'UP' }) });

app.listen(process.env.PORT, () => {
    console.log(`[EXPRESS SERVER RUNNING IN PORT ] ${process.env.PORT}`);
});