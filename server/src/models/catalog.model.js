const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

//const planets = require('./planets.mongo');
//import { items } from "../../data";
var data = require('../../data/products.json');
const products = [];

function loadCatalogData2() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'products_data.csv'))
      .pipe(parse({
        comment: '#',
        columns: true,
      }))
      .on('data', async (data) => {
        //if (isHabitablePlanet(data)) {
          saveProduct(data);
        //}
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', async () => {
        const countProductsFound = (await getAllProducts()).length;
        console.log(`${countProductsFound} products found!`);
        resolve();
      });
  });
}

async function loadCatalogData() {
  // return await products.find({}, {
  //   '_id': 0, '__v': 0,
  // });

  return data;
}

async function getAllProducts() {
  // return await products.find({}, {
  //   '_id': 0, '__v': 0,
  // });

  return data;
}

async function saveProduct(product) {
  try {
    products.push(product);
    // await planets.updateOne({
    //   keplerName: planet.kepler_name,
    // }, {
    //   keplerName: planet.kepler_name,
    // }, {
    //   upsert: true,
    // });
  } catch(err) {
    console.error(`Could not save product ${err}`);
  }
}

module.exports = {
  loadCatalogData,
  getAllProducts,
};
