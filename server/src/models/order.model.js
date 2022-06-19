const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const planets = require('./planets.mongo');
const orders = [
  {
    "order_id": 1,
    "date" : "10-01-2022",
    "items" : [ "item1", "item2"]
  },
  {
    "order_id": 2,
    "date" : "10-01-2022",
    "items" : [ "item1", "item2"]
  },
];

async function getAllOrders() {

  return orders;
}


module.exports = {
  getAllOrders,
};
