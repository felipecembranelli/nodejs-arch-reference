const express = require('express');

const {
  httpGetAllOrders,
} = require('./ordering.controller');

const ordersRouter = express.Router();

ordersRouter.get('/', httpGetAllOrders);

module.exports = ordersRouter;