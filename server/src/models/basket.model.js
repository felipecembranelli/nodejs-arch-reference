const path = require('path');

const planets = require('./planets.mongo');
const shoppingCart = 
  {
    "userName": 1,
    "totalPrice" : "1000.00",
    "items" : [ "item1", "item2"]
  };

async function getBasket() {

  return shoppingCart;
}


module.exports = {
  getBasket,
};
