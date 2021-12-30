const sleepRouter = require('express').Router();
const sleepLib = require('../lib/sleepLib');

// Get Methods

sleepRouter.get('/', async (_req, res) => {
  const result = await sleepLib.getAllEntries();
  res.send(result);
});

sleepRouter.get('/entry/:id', async (req, res) => {
  const result = await sleepLib.getEntry(req.params.id);
  res.send(result);
});

sleepRouter.get('/pending', async (_req, res) => {
  const result = await sleepLib.getLastEntryPending();
  res.send(result);
});

sleepRouter.get('/completed', async (_req, res) => {
  const result = await sleepLib.getCompleted();
  res.send(result);
});

sleepRouter.get('/last', async (_req, res) => {
  const result = await sleepLib.sortByDate();
  res.json(result);
});

sleepRouter.get('/lastWeek', async (_req, res) => {
  const result = await sleepLib.sortByDateWeek();
  res.json(result);
});

// Post Methods

sleepRouter.post('/entry', async (req, res) => {
  const { body } = req;
  if (body === 'undefined') {
    return res.statusCode(400).json({ error: 'content missing' });
  }
  try {
    const response = await sleepLib.newEntry(body);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  return null;
});

sleepRouter.delete('/delete/:id', async (req, res) => {
  try {
    await sleepLib.deleteEntry(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

sleepRouter.put('/update/:id', async (req, res) => {
  const { body } = req;
  try {
    const result = sleepLib.updateEntry(req.params.id, body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = sleepRouter;
