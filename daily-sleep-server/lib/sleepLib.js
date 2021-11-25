//  Sleep Tracker Library 1.0
require("dotenv").config();
const Sleep = require("../models/sleepEntry");

// Temporary data obtained statically
const { entries, bedEntries } = require("../data/entries");
const { format } = require("date-fns");

const getAllEntries = async () => {
  const result = await Sleep.find({});
  return result;
};

const getLastEntryPending = async () => {
  const result = await Sleep.find({ completed: false });
  return result;
};

const getCompleted = async () => {
  const result = await Sleep.find({ completed: true });
  return result;
};

const getEntry = async (id) => {
  const result = await Sleep.findById(id);
  return result;
};

const updateEntry = async (id, sleep) => {
  try {
    const result = await Sleep.findByIdAndUpdate(id, sleep, { new: true });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteEntry = async (deleteID) => {
  try {
    const result = await Sleep.findByIdAndRemove(deleteID);
    return result;
  } catch (error) {
    throw new Error(`Error trying to delete entry with id: ${deleteID}`);
  }
};

const newEntry = async (body) => {
  const sleep = new Sleep({
    startDate: body.startDate,
    endDate: body.endDate ? body.endDate : null,
    sleepRating: body.sleepRating ? body.sleepRating : null,
    dayRating: body.dayRating ? body.dayRating : null,
    completed: body.completed,
  });

  try {
    const response = await sleep.save();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllEntries,
  deleteEntry,
  getEntry,
  getLastEntryPending,
  getCompleted,
  updateEntry,
  newEntry
};
