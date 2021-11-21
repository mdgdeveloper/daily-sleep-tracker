const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req,res) => {
    res.send('daily-sleeper-api-0.1');
})

app.listen(port, () => {
    console.log(`Daily Sleeper API server - working on port ${port}`);
})