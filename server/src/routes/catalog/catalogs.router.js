const express = require('express');

const {
  httpGetAllProducts,
} = require('./catalog.controller');

const catalogsRouter = express.Router();

catalogsRouter.get('/', httpGetAllProducts);

module.exports = catalogsRouter;