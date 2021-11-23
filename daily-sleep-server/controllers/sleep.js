const sleepRouter = require("express").Router();
const sleepLib = require("../lib/sleepLib");



sleepRouter.get("/", (req, res) => {
  const result = sleepLib.getAllEntries();
  res.send(result);
});

sleepRouter.get("/lastWeek", (req, res) => {
  res.send("/api/sleep/lastWeek");
});

sleepRouter.get("/lastMonth", (req, res) => {
  res.send("/api/sleep/lastMonth");
});

sleepRouter.get("/today", (req, res) => {
  res.send('');
});

module.exports = sleepRouter;
