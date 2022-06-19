const express = require('express');

const {
  httpGetBasket,
} = require('./basket.controller');

const basketRouter = express.Router();

basketRouter.get('/', httpGetBasket);

module.exports = basketRouter;