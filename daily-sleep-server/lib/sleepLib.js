//  Sleep Tracker Library 1.0

// Temporary data obtained statically
const {entries, bedEntries} = require("../data/entries");
const { format } = require("date-fns");

// TODO: Metodos de la API
// getLastWeek(date)
// getLastMonth(date)
// setStartTime(date)
// setEndTime(date, rating)

const getAllEntries = () => {
  const fecha = format(new Date(2014,1,11), 'MM/dd/yyyy');
  const fecha2 = new Date(Date.now());
  const fecha3 = format(fecha2, 'dd/MMM/yyyy')
  const fechaA = new Date("2021-11-23T23:00:18.389Z");
  const fechaB = new Date("2021-11-24T07:05:22.389Z");
  console.log('resultado', fechaB - fechaA);
  const resultado = (fechaB - fechaA)/60000;
  console.log('horas', resultado);
  return entries;
};

const getEntriesWeek = (date) => {
  if (period === "lastWeek") {
    // Last Week Analysis
  }
};

const getBedEntries = () => {
  return bedEntries;
}

const getEntriesMonth = (date) => {};

const getEntry = (id) => {
  // Get Entry by ID
};

const setNewEntry = () => {
  const today = new Date(Date.now());



}

const closeEntry = (id) => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minute = today.getMinutes();
}

module.exports = { getAllEntries, getBedEntries, getEntry, getEntriesWeek, getEntriesMonth };