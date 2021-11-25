const express = require("express");
require('dotenv').config()
const app = require("./app");

const Sleep = require('./models/sleepEntry');


app.listen(process.env.PORT, () => {
  console.log(`Server working at ${process.env.PORT}`);
});
