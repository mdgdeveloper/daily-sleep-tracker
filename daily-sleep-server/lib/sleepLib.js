//  Sleep Tracker Library 1.0

// Temporary data obtained statically
const entries = require("../data/entries");

// TODO: Metodos de la API
// getLastWeek(date)
// getLastMonth(date)
// setStartTime(date)
// setEndTime(date, rating)

const getAllEntries = () => {
  return entries;
};

const getEntriesWeek = (date) => {
  if (period === "lastWeek") {
    // Last Week Analysis
  }
};

const getEntriesMonth = (date) => {};

const getEntry = (id) => {
  // Get Entry by ID
};

const setNewEntry = () => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();



}

const closeEntry = (id) => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minute = today.getMinutes();
}

module.exports = { getAllEntries, getEntry, getEntriesWeek, getEntriesMonth };