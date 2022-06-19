const { getAllOrders } = require('../../models/order.model');

async function httpGetAllOrders(req, res) {
  return res.status(200).json(await getAllOrders());
}

module.exports = {
  httpGetAllOrders,
};