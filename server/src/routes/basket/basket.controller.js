const { getBasket } = require('../../models/basket.model');

async function httpGetBasket(req, res) {
  return res.status(200).json(await getBasket());
}

module.exports = {
  httpGetBasket,
};