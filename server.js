const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes')) //http://localhost:300/

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})