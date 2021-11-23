const express = require('express');
const cors = require('cors');
const sleepRouter = require('./controllers/sleep');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('daily-sleeper-api-0.1');
})


app.use('/api/sleep', sleepRouter);



module.exports = app;