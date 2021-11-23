const express = require("express");
const app = require("./app");
const port = 5000;

app.listen(port, () => {
  console.log(`Server working at ${port}`);
});
