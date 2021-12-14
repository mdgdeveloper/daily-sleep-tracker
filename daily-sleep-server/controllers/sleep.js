const sleepRouter = require("express").Router();
const sleepLib = require("../lib/sleepLib");
const Sleep = require("../models/sleepEntry");

// Get Methods

sleepRouter.get("/", async (req, res) => {
  const result = await sleepLib.getAllEntries();
  res.send(result);
});

sleepRouter.get("/entry/:id", async (req, res) => {
  const result = await sleepLib.getEntry(req.params.id);
  res.send(result);
});

sleepRouter.get("/pending", async (req, res) => {
  const result = await sleepLib.getLastEntryPending();
  res.send(result);
});

sleepRouter.get("/completed", async (req, res) => {
  const result = await sleepLib.getCompleted();
  res.send(result);
});


sleepRouter.get("/last", async (req,res) => {
  const result = await sleepLib.sortByDate();
  res.json(result);
})

sleepRouter.get("/lastWeek", async (req, res) => {
  const result = await sleepLib.sortByDateWeek();
    res.json(result);
})


// Post Methods

sleepRouter.post("/entry", async (req, res) => {
  const body = req.body;
  console.log("body",body);
  if (body === "undefined") {
    return res.statusCode(400).json({ error: "content missing" });
  }
  try {
    const response = await sleepLib.newEntry(body);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

sleepRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await sleepLib.deleteEntry(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

sleepRouter.put("/update/:id", async (req, res) => {
  const body = req.body;
  try {
    const result = sleepLib.updateEntry(req.params.id, body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = sleepRouter;
